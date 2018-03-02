const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const user = new User(req.user);
  user.save((err, user) => {
    if (err) return res.send(err);
    res.json({ success: `${user.username} saved to database.`, user});
  });
};

module.exports = {
  createUser
};
