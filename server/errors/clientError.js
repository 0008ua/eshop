/**
 * Client errors 400..
 *
 * @export
 * @class ClientError
 * @extends {Error}
 * @param {object|null} err
 * @param {string|null} err.message
 * @param {number|null} err.status
 * @param {number|string|null} err.code
 */
module.exports = class ClientError extends Error {
  constructor(err) {
    super();
    console.log('error ', err);
    this.message = err && err.message ? 'Client error. ' + err.message : 'Bad request';
    this.status = err && err.status ? err.status : 400;
    this.code = err && err.code ? err.code : 0;
    this.name = 'ClientError';
  }
}

//    messages
// uniqueConflict (login or email already exists) - 422 Unprocessable Entity
// noSuchUser (wrong email, _id, login) => clientError - 401 Unauthorized
// wrongCredentials (wrong code, password) => clientError - 403 Forbidden
// maxTries (reached max of tries) => clientError - 403 Forbidden
// recaptchaErr () => clientError - 403 Forbidden
// bc (Bestcrypt errors)
// notAuthorized (don't have permission) => clientError - 401 Unauthorized

// Angular
// (err: HttpErrorResponse) => {
//   console.log('err', err.error.message);
// });

