const express = require('express');
const cors = require('cors');

const server = express();

const usersRouter = require("../users/users-router.js");

server.use(cors());

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: "running "});
});

module.exports = server;