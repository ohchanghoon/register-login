const mongoose = require('mongoose');
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

const User = mongoose.model('User', userSchema);
module.exports = { User };
