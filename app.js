'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
const path = require('path');
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
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var tweet_model = require('./models/tweet');

var { composeWithMongoose } = require('graphql-compose-mongoose') ;
var { schemaComposer } = require('graphql-compose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/app', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


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



const customizationOptions = {}; // left it empty for simplicity, described below
const TweetTC = composeWithMongoose(tweet_model, customizationOptions);

schemaComposer.Query.addFields({
  tweetById: TweetTC.getResolver('findById'),
  tweetByIds: TweetTC.getResolver('findByIds'),
  tweetOne: TweetTC.getResolver('findOne'),
  tweetMany: TweetTC.getResolver('findMany'),
  tweetCount: TweetTC.getResolver('count'),
  tweetConnection: TweetTC.getResolver('connection'),
  tweetPagination: TweetTC.getResolver('pagination'),
});
 
// schemaComposer.Mutation.addFields({
//   tweetCreateOne: TweetTC.getResolver('createOne'),
//   tweetCreateMany: TweetTC.getResolver('createMany'),
//   tweetUpdateById: TweetTC.getResolver('updateById'),
//   tweetUpdateOne: TweetTC.getResolver('updateOne'),
//   tweetUpdateMany: TweetTC.getResolver('updateMany'),
//   tweetRemoveById: TweetTC.getResolver('removeById'),
//   tweetRemoveOne: TweetTC.getResolver('removeOne'),
//   tweetRemoveMany: TweetTC.getResolver('removeMany'),
// });
 
const graphqlSchema = schemaComposer.buildSchema();

var root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: root,
  graphiql: true,
}));