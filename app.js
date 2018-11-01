'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var dotenv = require('dotenv');
dotenv.config({ silent: false });


var tw = require('node-tweet-stream')({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    token: process.env.TOKEN,
    token_secret: process.env.TOKEN_SECRET
});
tw.track('javascript');


module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};



SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  // tw.on('tweet', function(tweet){
  //   console.log(tweet);
  //   io.emit('tweet', tweet);
  // });
  
  io.on('connection', function(socket){
    console.log('a user connected');
  });

  var port = process.env.PORT || 10010;
  app.listen(port);

  
});


var db = require('./config/db.js');

db.setup();