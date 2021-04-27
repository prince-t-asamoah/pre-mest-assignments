const mongoose = require('mongoose');

const DBConnect = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://admin:adm!n@cluster0.0nbpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, userUnifiedTopology: true });
        console.log("Database connection sucessful");
    } catch (error) {
        console.log(error);
    }
}
module.exports = DBConnect;