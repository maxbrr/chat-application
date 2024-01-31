// make .env-file accessible
const dotenv = require("dotenv").config();
// require modules
const express = require("express");
const http = require("http");
const createWebSocketServer = require("./createWebSocketServer.js");
// instantiate express app and pass json middleware
const app = express();
app.use(express.json());
// create http-server and pass express-app to it
const server = http.createServer(app);
// create webSocketServer and attach it to http server
createWebSocketServer(server);

// get port from environment variable
const PORT = process.env.PORT;
// setup http-server
server.listen(PORT, () => {
  console.log(`Listenng on port ${ PORT }`);
});
