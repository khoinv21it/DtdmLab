var mongoose = require("mongoose");
mongoose.connect('mongodb+srv://khoinguyen010503:YCYur0dmGervDilH@cluster0.gzyss.mongodb.net/demo');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "first_name" : String,
    "last_name" : String,
    "email": String,
    "gender": String,
    "ip_address": String,
};
// create model if not exists.
module.exports = mongoose.model('users',userSchema);