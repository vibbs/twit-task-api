'use strict';
var util = require('util');
var tweet_model = require('../../models/tweet.js');
var io = require('../../app');
var Twitter = require('twitter');
var dotenv = require('dotenv');
var async = require('async');
dotenv.config({ silent: false });


var twitter = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
});

module.exports = {
  getTweets    : getTweets,
  streamTweets : streamTweets
};

function getTweets(req, res) {
  
    var perPage = req.swagger.params.perPage.value || 50 ;
    var currentPage = req.swagger.params.currentPage.value || 1 ;

    
    tweet_model.find({})
    .skip(currentPage)
    .limit(perPage)
    .exec(function(err, docs){
      if(err){
        res.json(err);
      }
      res.json(docs);

    });

}

function streamTweets(req, res){
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  stream();
}


let socketConnection;
let twitterStream;

  //Emits data with socket.io as twitter stream flows in
  const stream = () => {
    twitter.stream('statuses/filter', { track: "javascript" }, (stream) => {
        stream.on('data', (tweet) => {
          console.log('-');
          var new_tweet_obj={
            id_str: tweet.id_str,
            user: {
                name: tweet.user.name,
                screen_name: tweet.user.screen_name,
                profile_image_url: tweet.user.profile_image_url,
            },
            text: tweet.text,
            created_at: tweet.created_at,
            favorite_count: tweet.favorite_count,
            retweet_count: tweet.retweet_count,
            entities: {
                media: tweet.entities.media,
                urls: tweet.entities.urls,
                user_mentions: tweet.entities.user_mentions,
                hashtags: tweet.entities.hashtags,
                symbols: tweet.entities.symbols,
              } 
          };

          async.waterfall([
            function(callback) {
              tweet_model.countDocuments({}, function(e, count){
                if(e) {callback(e, null)}
                console.log('count : '+ count)
                callback(null, count)
              })
            },

            function(count, callback) {
              //this limit is to make sure that my db doesnt explode
                if(count > 100 ){
                  console.log("DB limit exceeded-");
                  sendMessage(new_tweet_obj);
                }else{
                  tweet_model.create(new_tweet_obj, function(m_err, doc){
                    if(m_err){
                      console.error(m_err);
                    }else{
                      sendMessage(doc);
                    }
                  });
                }
                callback(null, 'success');
            },

          ],
             function(err, result){
               if (err) console.error(err) ;
              //no need to do anything here
          })

          
            
        });

        stream.on('error', (error) => {
            console.log(error);
        });

       // twitterStream = stream;
    });
  }


  io.on('connection', function(socket){
    socketConnection = socket;
    stream();
     socket.on("connection", () => console.log("Client connected"));
     socket.on("disconnect", () => console.log("Client disconnected"));
  });

 

    const sendMessage = (msg) => {
      if (msg.text.includes('RT')) {
        return;
      }
      socketConnection.emit("tweets", msg);
    }