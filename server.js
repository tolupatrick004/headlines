const express = require('express');
const path = require('path');

const server = express();
server.use(express.static(path.join(__dirname, '/src')));
server.listen(process.env.PORT || 8080);