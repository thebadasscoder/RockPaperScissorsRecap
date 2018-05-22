'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './frontend/public')));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(3000, () => console.log('Server running on Port 3000'));

module.exports = app;