const express = require('express');
const cors = require('cors');

const router = require('./router');
const DBConnect = require('./db');

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());
server.use('/api/v1', router);

DBConnect();

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});