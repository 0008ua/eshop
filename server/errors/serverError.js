/**
 * Server errors 500..
 *
 * @export
 * @class ServerError
 * @extends {Error}
 * @param {object|null} err
 * @param {string|null} err.message
 * @param {number|null} err.status
 * @param {number|string|null} err.code
 */
module.exports = class ServerError extends Error {
  constructor(err) {
    super();
    this.message = err && err.message ? 'Internal Server Error. ' + err.message : 'Internal Server Error';
    this.status = err && err.status ? err.status : 500;
    this.code = err && err.code ? err.code : 0;
    this.name = 'ServerError';
  }
}

//    messages
// bc (Bestcrypt errors) - 500 Internal Server Error

// Angular
// (err: HttpErrorResponse) => {
//   console.log('err', err.error.message);
// });
