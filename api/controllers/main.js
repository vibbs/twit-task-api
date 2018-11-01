'use strict';
var util = require('util');
var tweet_model = require('../../models/tweet.js');

module.exports = {
  getTweets    : getTweets
};

function getTweets(req, res) {
  
    var perPage = req.swagger.params.perPage.value || 50 ;
    var currentPage = req.swagger.params.currentPage.value || 1 ;

    
    tweet_model.find({}, function(err, docs){

      res.json(docs);

    });

}
