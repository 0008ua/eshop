const jwt = require('jsonwebtoken');
const config = require('../config');
const nodemailer = require('nodemailer');

const createJWT = (prefix, sub, expire, secret) => {
  const date = Math.floor(Date.now() / 1000); // in seconds
  return (
    prefix +
    jwt.sign(
      {
        sub,
        iat: date,
        exp: date + expire,
      },
      secret,
    )
  );
};


const sendMail = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: config.get('EMAIL_USER'),
      pass: config.get('EMAIL_PASS'),
    },
  });
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(
          new ServerError({
            message: 'Помилка відправки email',
          }),
        );
      }
      resolve(info);
    });
  });
};

module.exports = {
  createJWT,
  sendMail,
};
