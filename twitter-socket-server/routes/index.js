const express = require("express");
const router = express.Router();
const api_helper = require('../helpers/apiHelper');
const twitterApiHelper = require('../helpers/twitterApiHelper');
const { response } = require("express");

const TWEET_API_ENDPOINT = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TwitterDev&count=1';
const TRENDS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

router.get("/", (req, res) => {
  res.send({ response: "Welcome To Twitter" }).status(200);
});

router.get('/tweets',(req,res) => {
  //twitterApiHelper.makeTweetAPICall();
  api_helper.getLatestTweets(TWEET_API_ENDPOINT)
    .then(response => {
      res.json(response);
    }).catch(error => {
      res.send(error);
    });
});

router.get('/trendings',(req,res) => {
  api_helper.getLatestTrends(TRENDS_API_ENDPOINT)
  .then(response => {
    res.json(response);
  }).catch(error => {
    res.send(error);
  });
  
});



module.exports = router;