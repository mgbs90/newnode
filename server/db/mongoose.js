const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });

module.exports = mongoose;

