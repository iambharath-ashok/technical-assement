const express = require("express");
const socketIo = require("socket.io");
const index = require("./routes/index");
var cors = require('cors');
const PORT = process.env.PORT || 4001;


const app = express();
app.use(index);
app.use(cors());
const server = app.listen(PORT, () => console.log('Listening To Requests On Port '+PORT));

const io = socketIo(server);

io.on("connection", (socket) => {
    console.log('Made Socket Connection: ',socket.id);
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on('tweets', data => getLatestTweetsFromApi(data)) ;
    socket.on('trendings', data => getLatestTrendsFromApi(data)) ;

});


const getApiAndEmit = socket => {
    const response = new Date();
    socket.emit('tweets',response);
  };

const getLatestTweetsFromApi = clientData => {
    const response = new Date();
    console.log(clientData);
  };

  const getLatestTrendsFromApi = clientData => {
    const response = new Date();

    console.log(clientData);
  };