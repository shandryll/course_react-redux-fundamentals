const mongoose = require('mongoose');
mongoose.Promise = global.Promise;  // Just to get the Mongoose Api Promise depreciation warning message
module.exports = mongoose.connect('mongodb://localhost/todo');