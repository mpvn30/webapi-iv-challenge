require('dotenv').config();

const express = require('express');

const server = express(); 
server.get('/', (req, res) => {
  res.status(200).json({ message: process.env.GREETING });
});

server.get('/', (req, res) => {
    res.status(200).json({ message: "Hello" });
  });

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});
