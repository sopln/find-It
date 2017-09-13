var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String, 
    fname: String,
    lname: String, 
    state: String
});

module.exports = mongoose.model('users', userSchema);
