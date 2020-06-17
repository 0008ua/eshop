const config = require('../config');
const { createJWT } = require('../helpers');

const setCSRFCookie = (req, res, next) => {
  const cookieCsrfOptions = {
    httpOnly: false,
    maxAge: 10800000,
    sameSite: 'Strict',
    path: '/',
  };
  res.cookie(
    'XSRF-TOKEN',
    req.csrfToken(),
    cookieCsrfOptions,
  );
  next();
};

/*
 set cookie to frontend with users credential
*/
const setFrontendAuthCookie = (req, res, next) => {
  const frontendCookieName = config.get('FRONTEND_AUTH_SID');
  const JWTSecret = config.get('JWT_SECRET');

  let token;
  if (req.isAuthenticated()) {
    const user =
    {
      _id: req.user._doc._id,
      displayName: req.user._doc.displayName,
      photoUrl: req.user._doc.photoUrl,
      provider: req.user._doc.provider,
      role: req.user._doc.role,
    };
    // console.log('user', user.provider);
    token = createJWT('', user, null, JWTSecret);
  } else {
    // console.log('not user', null);
    token = createJWT('', null, null, JWTSecret);
  }
  res.cookie(
    frontendCookieName,
    token,
    {
      // 'secure': false,
      httpOnly: false,
      // maxAge: null,
      sameSite: 'Strict',
    },
  );
  next();
};

module.exports = {
  setCSRFCookie,
  setFrontendAuthCookie,
};
