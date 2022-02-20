const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket=require('ws');

const wss = new WebSocket.Server({server:server});

wss.on('connection', function connection(ws) {
    console.log("A new client is here!");
    ws.send('Welcome new Client!')
    ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send('got ur msg '+data);
    });
  
    ws.send('something');
  });

app.get('/',(req,res)=> res.send("hello World!"));
server.listen(3010,()=>console.log('port:3010'));