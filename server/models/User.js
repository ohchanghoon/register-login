const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },

  id: {
    type: String,
    maxlength: 50,
  },

  password: {
    type: String,
    maxlength: 50,
  },

  email: {
    type: String,
    maxlength: 50,
  },

  token: {
    type: String,
  },
});

userSchema.pre('save', function (next) {
  var user = this;
  // 비밀번호 암호화
  bcrypt.getSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
    });
  });
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
