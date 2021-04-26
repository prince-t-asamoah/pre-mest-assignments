const mongoose = require('mongoose');

const DBConnect = async () => {
    try {
        const connect = await moongose.connect(, { useNewUrlParser: true, userUnifiedTopology: true });
        console.log("Database connection sucessful");
    } catch (error) {
        console.log(error);
    }
}
module.exports = DBConnect;