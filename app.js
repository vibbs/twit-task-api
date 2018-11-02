'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var dotenv = require('dotenv');
dotenv.config({ silent: false });
var port = process.env.PORT || 3001;
var server = app.listen(port);
var io = require('socket.io').listen(server);
var swaggerTools  = require('swagger-tools');
var bodyParser  = require('body-parser');
var fs = require('fs');
var jsYaml = require('js-yaml');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};



SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  
});

var swaggerDoc = jsYaml.load(fs.readFileSync('./api/swagger/swagger.yaml'));
// Initialize the Swagger middleware for the api doc purpose
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
});



var db = require('./config/db.js');

db.setup();

module.exports = io; 