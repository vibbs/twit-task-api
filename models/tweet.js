var mongoose = require('mongoose');


var schema = new mongoose.Schema({
  id_str: String,
  tweet: Object,
  text: String,
  user : {
    name: String,
    screen_name: String,
    profile_image_url: String
  },
  created_at: Date,
  favorite_count: Number,
  retweet_count: Number,
  entities: Object
});



// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);
