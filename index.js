require('dotenv').config()

const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Web 23' });
});

//port is coming from environment 
//when deployed to Heroku, they will set port
const port = process.env.PORT || 4000



server.listen(port, () => {
  console.log('\n Server running on port ${port} \n');
});
