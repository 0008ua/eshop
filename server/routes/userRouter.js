const express = require('express');
const router = express.Router();
const passport = require('passport');
const { setFrontendAuthCookie } = require('../middlewares');
const userController = require('../controllers/userController');

router.get('/checkauthorization', userController.checkAuthorization);

router.get('/logout',
  (req, res, next) => {
    req.logout();
    next();
  },
  setFrontendAuthCookie,
  (req, res, next) => {
    return res.status(200).json('Logged out');
  },
);

router.get('/auth/facebook',
  passport.authenticate(
    'facebook',
    {
      authType: 'rerequest',
      scope: ['email'],
    }),
);

router.get('/auth/facebook/redirect',
  passport.authenticate('facebook', { session: true }),
  setFrontendAuthCookie,
  function(req, res, next) {
    res.redirect('/user/redirection-after-oauth');
  },
);


// 1step: on google authenticate button press
router.get('/auth/google',

  // 2step: passport redirects to google 'chose account' window
  passport.authenticate(
    'google',
    {
      scope: ['profile', 'email'],
      accessType: 'offline',
    },
    { session: false }),
);

// 3.step: after user chose his account google redirects here
// this uri was saved on google api and in passport options
router.get('/auth/google/redirect',

  // 4.step: passport get code from google, extracts 'scope' info
  // and passed it to the callback function (./config/passport)
  passport.authenticate('google', { session: true }),

  // function(req, res, next) {
  //   console.log('req', req.query);
  //   next();
  // },

  // 5.step: set user cookie (for frontend manipulations)
  setFrontendAuthCookie,

  // 6.step: redirect to frontend
  function(req, res, next) {
    res.redirect('/user/redirection-after-oauth');
  },
);

module.exports = router;
