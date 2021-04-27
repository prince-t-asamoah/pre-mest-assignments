const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModelSchema = new schema({
    fullName: String,
    email: String,
    password1: String,
    password2: String
});

const userModel = mongoose.model('assignment7', userModelSchema);
module.exports = userModel;