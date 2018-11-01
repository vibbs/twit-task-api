'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};



SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  
  io.on('connection', function(socket){
    console.log('a user connected');
  });

  var port = process.env.PORT || 10010;
  app.listen(port);

  
});
