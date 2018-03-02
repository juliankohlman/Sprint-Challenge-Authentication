const mongoose = require('mongoose');
const Schema = mongoose.Schema;
bcrypt = require('bcrypt');

const UserSchema = Schema({
  // create your user schema here.
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.checkPassword = function(attemptedPswd, cb) {
  bcrypt.compare(attemptedPswd, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
