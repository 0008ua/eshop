const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profile: {
    type: Object,
  },
  provider: {
    type: String,
    required: true,
    enum: ['local', 'google', 'facebook'],
  },
  providersId: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
  },
  photoUrl: { //
    type: String,
    // default: config.get(defaultAvatarUrl),
  },
  displayName: { //
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['casual', 'guest', 'user', 'manager', 'admin'],
    default: 'guest',
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
