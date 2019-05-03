require('dotenv').config()
const path = require('path');

const express = require('express')
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`App listening on port ${PORT}!`))