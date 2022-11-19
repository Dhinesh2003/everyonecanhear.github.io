const WebSocket = require("ws");
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection",function connection(ws){
    console.log("New Connection Initiated");
});

app.get("/",(req, res) => res.send("Hellow wirld"));
console.log("Listening to Port 8080");
server.listen(8080);