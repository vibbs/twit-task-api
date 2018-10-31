'use strict';
var util = require('util');

module.exports = {
  getTweets: getTweets
};

function getTweets(req, res) {
  
    var perPage = req.swagger.params.perPage.value || 50 ;
    var currentPage = req.swagger.params.currentPage.value || 1 ;

    res.json({perPage:perPage, currentPage:currentPage});

}
