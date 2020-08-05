const port = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('cors');

server.use(allowCors());
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(port, () => {
    console.log('Server running on port', port);
});

module.exports = server;