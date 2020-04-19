process.env.NODE_CONFIG_DIR = __dirname + '/config';

const config = require('config');
const User = require('./models/UserModel');

console.log(config.get('level'));

let newUser = new User({
    fullName: 'ali gharebaghi',
    email: 'gharebaghii82@gmail.com',
    password: '123456'
});

newUser.save().then((user) => {
    console.log(`this user is : ${user}`);
});
