const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home'
    });
});

router.post('/', (req, res, next) => {
    users.push({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age
    });
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;