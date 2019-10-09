const PORT = 8080; 
const express = require('express');
const webserver = express();

const classifier = require("./classifier");

webserver.use(express.urlencoded())
webserver.use('/', express.static(__dirname + '/public'));
webserver.post('/api/classify', classifier.handle);
webserver.listen(PORT);

