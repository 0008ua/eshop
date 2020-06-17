const { ClientError, ServerError } = require('../errors');
const config = require('../config/');
const { sendMail } = require('../helpers');
const rp = require('request-promise-native');

/*
 * Pass next() if client is authenticated otherwise next(err)
 *
 */
const authentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(new ClientError({ message: 'notAuthenticated', status: 401 }));
  }
};


/*
 * Pass next() if client is authorized
 * (his role allowed according to permissions)
 * otherwise next(err)
 *
 */
const authorization = (restrictedRole) => {
  return (req, res, next) => {
    const usersRole = req.user._doc.role;
    const permissions = config.get('permissions');
    if (usersRole in permissions) {
      if (permissions[usersRole].indexOf(restrictedRole) >= 0) {
        return next();
      } else {
        return next(new ClientError({ message: 'notAuthorized', status: 401 }));
      }
    } else {
      return next(new ClientError({ message: 'notAuthorized', status: 401 }));
    }
  };
};

const recaptcha = (req, res, next) => {
  const recaptcha = req.query.recaptcha;

  if (recaptcha === '' ||
    recaptcha === null ||
    recaptcha === undefined) {
    return next(new ClientError({ message: 'Помилка коду recaptcha', status: 403, code: 'recaptchaErr' }));
  }
  const recaptchaSecret = config.get('RECAPTCHA_SECRET');

  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=
          ${recaptchaSecret}&response=${recaptcha}&
          remoteip=${req.connection.remoteAddress}`;

  rp(recaptchaURL)
    .then((result) => {
      result = JSON.parse(result);
      if (result.success === true) {
        return next();
      } else {
        return next(new ClientError({ message: 'Помилка коду recaptcha', status: 403, code: 'recaptchaErr' }));
      }
    })
    .catch((err) =>
      next(new ClientError({ message: 'Помилка коду recaptcha', status: 403, code: 'recaptchaErr' })),
    );
};


const sendFeedbackMessage = (req, res, next) => {
  const mailOptions = config.get('mailOptions:questionFromSite');
  const feedback = Object.assign({}, req.body);

  mailOptions.subject = req.isAuthenticated() ?
    mailOptions.subject + ' від користувача [login:] ' + req.user._doc.displayName :
    mailOptions.subject;
  mailOptions.text = `Питання ${feedback.message}. Контакти ${feedback.contacts}. Ім\'я ${feedback.name}`;
  mailOptions.html = `<p><span style="font-weight: bold;">Питання: </span>
          ${feedback.message} </p>
          <p><span style="font-weight: bold">Контакти: </span>
          ${feedback.contacts} </p>
          <p><span style="font-weight: bold">Ім\'я: </span>
          ${feedback.name} </p>`;

  return sendMail(mailOptions)
    .then(() => res.status(200).json('Повідомлення надіслано.'))
    .catch((err) => next(new ServerError({ message: 'Повідомлення не надіслано' })));
};

module.exports = {
  authentication,
  authorization,
  recaptcha,
  sendFeedbackMessage,
};
