
const ClientError = require('./clientError');
const ServerError = require('./serverError');
const DbError = require('./dbError');
// const errorHandler = require('./errorHandler')

const errorHandler = (err, req, res, next) => {
  console.log('error', req.app.get('env') === 'development' ? err : {});

  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json('Оновіть сторінку, вийшов час очікування(CSRF)');
  }

  // handle db errors
  if (err instanceof DbError) {
    // duplicate index error
    if (err.code === 11000) {
      if (new RegExp(/login_1\b/).test(err.message)) {
        return res.status(422).json('Цей логін вже використовується');
        // return res.status(422).json(new ResObj(false, 'Цей логін вже використовується', err));
      } else if (new RegExp(/email_1\b/).test(err.message)) {

        return res.status(422).json('Цей email вже використовується');
        // return res.status(422).json(new ResObj(false, 'Цей email вже використовується', err));
      }
      return res.status(422).json('Помилка унікальності даних');
      // return res.status(422).json(new ResObj(false, 'Помилка унікальності даних', err));
    }

    // other db errors
    return res.status(err.status).json(err);
  }
  // custom client error
  if (err instanceof ClientError) {
    return res.status(err.status).json(err);
  }

  // custom server error
  if (err instanceof ServerError) {
    return res.status(err.status).json(err);
  }

  // all other errors

  // set locals, only providing error in development
  res.locals.comment = 'Something went wrong :(';
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // // render the error page
  res.status(err.status || 500);
  res.render('error');
};

module.exports = {
  ClientError,
  ServerError,
  DbError,
  errorHandler,
};

