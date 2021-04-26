const mongoose = require('mongoose');
const schema = mongoose.schema;

const userModelSchema = new schema({
    fullName: String,
    email: String,
    password1: String,
    password2: String
});

const userModel = mongoose.model('userModel', userModelSchema);
module.exports = userModel;