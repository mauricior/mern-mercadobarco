const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

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

// @route POST api/accounts/users/signup
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
        success: false,
        message: 'Error: Server error.',
        err: err
      });
    }
      return res.send({
        success: true,
        message: 'Succesfully signed up.'
    });
  });
});

// @route POST api/accounts/users/signin
// @des   On login create a new userSession
// @access Public
router.post('/users/signin', (req, res) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;

  if(!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if(!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  User.find({
    email: email
  }, (err, users) => {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }
    if(users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    const user = users[0];
    if(!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    // Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }

      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      });
    });
  })
});

// @route GET api/accounts/users/verify
// @des Verify the token with the user._id and the userSession.token
// @acess Public
router.get('/user/verify', (req, res) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test

  // Verify the token is one of a kind and it's not deleted.

  UserSession.find({
    _id: token,
    isDeleted: false
  }, (err, sessions) => {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }

    if(sessions.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    } else {
      return res.send({
        success: true,
        message: 'Good'
      });
    }
  });
});

// @route GET api/accounts/users/logout
// @des Logout the user
// @acess Public
router.get('/user/logout', (req, res) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test

  // Verify the token is one of a kind and it's not deleted.

  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
    $set: {
      isDeleted: true
    }
  }, null,  (err, sessions) => {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }

      return res.send({
        success: true,
        message: 'Good'
      });

  });
});

module.exports = router;
