const express = require('express');
const router = require('./router');

const server = express();
const port = 5000;

server.use(express.json());
server.use('/api/v1', router);

server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

