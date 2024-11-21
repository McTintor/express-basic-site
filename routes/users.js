const express = require('express');

const homeData = require('./home');

const router = express.Router();

router.get('/users', (req, res, next) => {
  const users = homeData.users;
  res.render('users', {
    users: users,
    pageTitle: 'Users',
    path: '/users',
    hasProducts: users.length > 0,
  });
});

module.exports = router;