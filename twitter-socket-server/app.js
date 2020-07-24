const express = require("express");
const socketIo = require("socket.io");
var cors = require('cors');
const PORT = process.env.PORT || 4001;
const config = require('./config/config');
const Twit = require('twit');
const utils = require('./utils/utils');
const constants = require('./utils/constants');

const app = express();
app.use(cors());
const server = app.listen(PORT, () => console.log('Listening To Requests On Port '+PORT));
const io = socketIo(server);
const Twitter = new Twit(config);

io.on("connection", (socket) => {
    console.log('Made Socket Connection: ',socket.id);
  
    Twitter.get(constants.TWEET_STREAMING_API, { q: constants.TWEETS_FILTER_TEXT, count: constants.TWEETS_COUNT }, function(error, data, response) {
        let tweets=[];
        data.statuses.map(tweet => {
            tweets.push(utils.getCustomizedTweet(tweet));
        });    
          io.emit('tweets',tweets);
      });

    const stream = Twitter.stream(constants.STATUS_FILTER_STREAMING_API, { track: constants.TWEETS_FILTER_TEXT, language: constants.LANGAUGE })

    stream.on('tweet', function (tweet) {
        io.emit('tweet',utils.getCustomizedTweet(tweet));
    });

    Twitter.get(constants.TRENDS_STREAMING_API, { id: constants.WOEID }, function(error, data, response) {
        let [{ "trends" : trends }]  = data;
        io.emit('trends', trends.slice(0,constants.TRENDS_COUNT));
    });

});

app.get(constants.TRENDS_API_PATH,(req,res) => {
    Twitter.get(constants.TRENDS_STREAMING_API, { id: constants.WOEID }, function(error, data, response) {
        let [{ "trends" : trends, "locations" : locations }]  = data;  
        res.send(trends.slice(0,constants.TRENDS_COUNT)).status(200);
      });
    
  });