var mongoose = require('mongoose');

var schema = new mongoose.Schema({});

// Create a static getTweets method to return tweet data from the db
schema.statics.getTweets = function(perPage, currentPage, callback) {

  var tweets = [],
      start = (perPage * 50) + (currentPage * 1);


  Tweet.find({}).exec(function(err,docs){

    if(!err) {
      tweets = docs;  // We got tweets
      tweets.forEach(function(tweet){
        tweet.active = true; // Set them to active
      });
    }

    // Pass them back to the specified callback
    callback(tweets);

  });

};

// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);