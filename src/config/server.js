const port = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.listen(port, () => {
    console.log('Server running on port', port);
});

module.exports = server;