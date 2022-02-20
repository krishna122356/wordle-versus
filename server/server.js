
const express = require('express');
const app = express();
  
app.set("view engine", "ejs");
app.use(express.static("public"));
  
app.get("/", function(req, res) {
    res.send("Welcome to chat app!");
});

server = app.listen(3001);

const io = require("socket.io")(server);
  
io.on('connection', (socket) => {
     console.log("New user connected");
});

app.get("/", function(req, res) {
    res.render("index.ejs");
  });

