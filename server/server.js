process.env.NODE_CONFIG_DIR = __dirname + '/config';

const config = require('config');
const User = require('./models/UserModel');
const express = require('express');
const _ = require('lodash');

const app = express();
app.use(express.json());

console.log(config.get('level'));

app.post('/api/users', (req, res) => {
    let user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then((user) => {
        res.status(200).send(user);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(config.get('PORT'), () => {
    console.log('server run in port 3000');
});
