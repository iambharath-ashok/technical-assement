import React,{ useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import Main from './Main';
import {BrowserRouter} from 'react-router-dom';


const ENDPOINT = "http://127.0.0.1:4001";

export default function SocketConnector() {
        
        const [response, setResponseState] = useState("");
        
        useEffect(() => {
            const socket = socketIOClient(ENDPOINT);
          
            socket.on("tweets", data => {
                console.log(data);
                setResponseState({
                  type: 'Tweets',
                  name: 'bharath',
                  tweets: ["tweet1","tweet2", "tweet3", "tweet4"]
                });
            });

            socket.on("trendings", data => {
              console.log(data);
              setResponseState({
                type: 'Trendings',
                name: 'bharath',
                trendings: data
              });
          });
            return () => socket.disconnect();
          }, []);

        return (
          <BrowserRouter>
            <Main tweets={response.tweets} trendings={response.trendings}/>
          </BrowserRouter>
        );
           
    //}
}