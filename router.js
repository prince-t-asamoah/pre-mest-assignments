const express = require('express');
const users = require('./users');
const router = express();

router.post("/login", function (request, response) {
    // response.status(200).send("Hello World");

    const { username, password } = request.body;

    console.log(request.body);

    let user = users.filter(arrayElement => arrayElement.username === username);

    if (user.length > 0) {
        if (user[0].password === password) {
            response.send({ message: "Login Successful" });
        } else {
            response.send({ message: "Username or Password wrong" });
        }
    } else {
        response.send({ message: "Login failed" });
    }
});

router.post('/signup', function(request, response){
    let newUser = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
        userName: request.body.userName
    };
    console.log(newUser);
    response.status(300).send({ message: "Sign up successful"});
});

module.exports = router;