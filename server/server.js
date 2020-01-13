const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const port = 3000;

const app = express();

  app.use(cors());

  app.get('/', function (req, res){
    res.send('Hello from server');
  })

  app.post('/contactForm', function (req, res) {
    console.log(req.body);
    res.status(200).send({"message": "Data received"})
  })

  app.listen(port, function () {
    console.log('Server running on localhost:' + port);
  });
