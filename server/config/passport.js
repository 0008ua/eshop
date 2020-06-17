const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./');

const { UserModel } = require('../models');
const { DbError } = require('../errors');

passport.serializeUser((user, done) => {
  return done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  UserModel.findById(_id).then(
    (user) => done(null, user),
    (err) => done(err, false),
  );
});

// passport.use(new FacebookStrategy({
//   clientID: config.get('FACEBOOK_APP_ID'),
//   clientSecret: config.get('FACEBOOK_APP_SECRET'),
//   callbackURL: config.get('SERVER_URL') + '/api/user/auth/facebook/redirect',
//   profileFields: ['id', 'displayName', 'email', 'picture'],
//   graphAPIVersion: 'v5.0',
// },
// async function(accessToken, refreshToken, profile, done) {
//   // const url = `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`;
//   // const result = await rp(url);
//   // console.log('result', result);
//   // https://graph.facebook.com/me?fields=id,name,email&access_token=EAAGxJVBUbZBsBAMneVSVier9qMTWbPMq7LwH3OmZBjBqDtcL3XnCkoaA5StVXoYtfnksx00OZAohHZAygz0lbItNDGXK4lZBjiLY1htZAfqAzkZAyWxPZCvTMUY32ZBGD11Vq44GkdcJGZBg44MNaLktZAKBhSQGsJ1CZC85X3VI1MC2kUxc6aN6mn9XZAfFUJyExMJ2QY4G9rFJ4wMlGLZCOsQjUgMUEcNj7Pn5gZD


//   UserModel.findOne({ providersId: profile.id, provider: 'facebook' })
//     .then((user) => {
//       if (user) {
//         // if user is already in db update credentials
//         return user.set({
//           providersId: profile.id,
//           displayName: profile.displayName,
//           photoUrl: profile.photos[0].value,
//           email: profile.emails[0].value,
//           emailVerified: !!'emailVerified',
//           accessToken,
//         }).save();
//       } else {
//         // if new user, create new record in db
//         return new UserModel({
//           providersId: profile.id,
//           provider: 'facebook',
//           displayName: profile.displayName,
//           photoUrl: profile.photos[0].value,
//           email: profile.emails[0].value,
//           emailVerified: !!'emailVerified',
//           role: 'user',
//           // createdAt: Date.now(),
//           accessToken,
//           refreshToken,
//         }).save();
//       }
//     })
//     .then((user) => {
//       return done(null, user);
//     })
//     .catch((err) => done(new DbError(err), false));
// },
// ));

// google sign in strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: config.get('GOOGLE_CLIENT_ID'),
      clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: config.get('SERVER_URL') + '/api/user/auth/google/redirect',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('profile', profile);

      UserModel.findOne({ providersId: profile.id, provider: 'google' })
        .then((user) => {
          if (user) {
            // if user is already in db update credentials
            return user.set({
              providersId: profile._json.sub,
              displayName: profile._json.name,
              photoUrl: profile._json.picture,
              email: profile._json.email,
              emailVerified: profile._json.email_verified,
              accessToken,
            }).save();
          } else {
            // if new user, create new record in db
            return new UserModel({
              providersId: profile._json.sub,
              provider: 'google',
              displayName: profile._json.name,
              photoUrl: profile._json.picture,
              email: profile._json.email,
              emailVerified: profile._json.email_verified,
              role: 'user',
              // createdAt: Date.now(),
              accessToken,
              refreshToken,
            }).save();
          }
        })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => done(new DbError(err), false));
    },
  ));

module.exports = passport;
