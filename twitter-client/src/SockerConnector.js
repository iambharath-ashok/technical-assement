import React,{ useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import Main from './Main';
import {BrowserRouter} from 'react-router-dom';
import {WS_ENDPOINT} from './utils/contants';


export default function SocketConnector() {
        
        const [response, setResponseState] = useState("");
        var tweetArray = [];
        var trendsArray = [];

        function updateTweetsArray(tweet) { 
          if(tweetArray && tweetArray.length > 0) {
            tweetArray.pop();
            tweetArray.unshift(tweet);
          }
          return tweetArray;
        }
        
        useEffect(() => {
            const socket = socketIOClient(WS_ENDPOINT);
          
            socket.on("tweets", tweets => {
                tweetArray = tweets;
                setResponseState({
                  tweets
                });
            });

            socket.on("tweet", tweet => {
              tweetArray = updateTweetsArray(tweet);
                setResponseState({
                  tweets: tweetArray,
                  trends : trendsArray
                });
            });

            socket.on("trends", trends => {
              trendsArray = trends;
              setResponseState({
                trends
              });
          });
            return () => socket.disconnect();
          }, []);

        return (
          <BrowserRouter>
            <Main tweets={response.tweets} trends={response.trends}/>
          </BrowserRouter>
        );
}