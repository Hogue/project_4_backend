var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var Bathroom = require('../models/bathrooms.js');
var fs = require('fs');

router.get('/', function(req, res) {
  Bathroom.find({}, function(err, bathroomList) {
    if (err) {
      res.sendStatus(404);
    }
    res.json(bathroomList);
    res.status(200);
  });
});

module.exports = router;
