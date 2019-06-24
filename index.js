/* Server Side */

let express = require('express');
let socket = require('socket.io')
let app = express();

let server = app.listen(4000, function() {
    console.log('I\'m listening...')
})

app.use(express.static('./src/server/public'))

let io = socket(server);

io.on('connection', function(socket) {
    console.log('connection made', socket.id)

    socket.on('chat', function(data) {
      io.sockets.emit('chat', data)
    })
})