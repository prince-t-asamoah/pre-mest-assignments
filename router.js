const express = require('express');
const usermodel = require('./user-model');

const router = express();

router.post('/signup', async function(request, response) {
   const { fullName, email, password1, password2 } = request.body;
   
try {
   let newUser = new usermodel({
      fullName, email, password1, password2
   })
   console.log(newUser);
   responseData = await newUser.save();
   
} catch (error) {
   response.status(400).send({ message: error});
}
   response.status(200).send({
      message: "Signup successful. Login to your account now!!",
      data: responseData
   });
});

module.exports = router;
