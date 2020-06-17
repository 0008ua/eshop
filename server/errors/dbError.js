/**
 * Database errors 500..
 *
 * @export
 * @class DbError
 * @extends {Error}
 * @param {object|null} err
 * @param {string|null} err.message
 * @param {number|null} err.status
 * @param {number|string|null} err.code
 */
module.exports = class DbError extends Error {
  constructor(err) {
    super();
    this.message = err && err.message ? 'DatabaseError. ' + err.message : 'DatabaseError';
    this.status = err && err.status ? err.status : 400;
    this.code = err && err.code ? err.code : 0;
    this.name = 'DatabaseError';
  }
};

// Angular
// (err: HttpErrorResponse) => {
//   console.log('err', err.error.message);
// });
