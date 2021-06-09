const express = require('express');
const appRoutes = require('./routes');
const appDBConnect = require('./DB');

const appServer = express();    
const appPort = 5000;

appDBConnect();

appServer.use(express.json());
appServer.use('/api/v1',appRoutes);

appServer.listen(appPort,()=>{return console.log(`Application server started on ${appPort}`);});
