const WebSocket = require("ws");

const createWebSocketServer = (server) => {
  const webSocketServer = new WebSocket.Server({ server });

  webSocketServer.on('connection', (webSocketConnection) => {
    webSocketConnection.on('message', (message) => {
      console.log("message event fired...");
      console.log(`Message => ${ message } <=`);
    });
    webSocketConnection.on('close', () => {
      console.log("Client disconnected...");
    })
  })
}

module.exports = createWebSocketServer;