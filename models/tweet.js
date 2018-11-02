var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id_str: String,
  user: Object,
  text: String,
  created_at: Date,
  favorite_count: Number,
  retweet_count: Number,
  entities: Object
});



// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);