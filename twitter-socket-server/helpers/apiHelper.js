const request = require('request');
const e = require('express');


module.exports = {

   getLatestTweets : async function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (error, response, body) => {
                if (error) {
                    reject(error);
                } else if (!error && response.statusCode == 200) {
                    resolve(body)
                }
              
            });
        })
    },

    getLatestTrends : async function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (error, response, body) => {
                if (error) {
                    reject(error);
                } else if (!error && response.statusCode == 200) {
                    resolve(body)
                }
              
            });
        })
    }
}