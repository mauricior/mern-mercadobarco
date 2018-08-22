const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route  GET api/accounts/users/:username
// @des    Get User by Username
// @access Public
router.get('/users/:username', (req, res) => {
  User.find({ username: req.params.username })
    .then(user => res.json(user));
});

// @route  GET api/accounts/users/:email
// @des    Get User by Email
// @access Public
router.get('/users/:email', (req, res) => {
  User.find({ email: req.params.email })
    .then(user => res.json(user));
});

// @route POST api/accounts/users/
// @des   Create a new User
// @access Public 
router.post('/users/signup', (req, res) => {
  const { body } = req;
  const {
    firstName,
    lastName,
    username,
    password
  } = body;

  let {
    email
  } = body;


// Verify if the fields are blank
  if(!firstName) {
    return res.send({
      success: false,
      message: 'Error: First name cannot be blank.'
    });
  }

  if(!lastName) {
    return res.send({
      success: false,
      message: 'Error: Last name cannot be blank.'
    });
  }

  if(!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }

  if(!username) {
    return res.send({
      success: false,
      message: 'Error: Username cannot be blank.'
    });
  }

  if(!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  // Verify email doesn't exist
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        err: err,
        success: false,
        message: 'Error: Server error.'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exists.'
      });
    }
  });

  // Save the new user
  const newUser = new User();

  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;
  newUser.username = username;
  newUser.password = newUser.generateHash(password);
  newUser.save((err, user) => {
    if(err) {
      return res.send({
        err: err,
        success: false,
        message: 'Error: Server error.'
      });
    }
    return res.send({
      success: true,
      message: 'Succesfully signed up.'
    });
  });
});


module.exports = router;
