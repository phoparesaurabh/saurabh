//node server which will handle socket io connecti
const io = require('socket.io')(8000);
const users = {};

io.on('connection', Socket =>{
    socket.on('user-joined', name=> {
        console.log("New user", name);
        users[Socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive',{message: message, name: users[socket.id]})
    });

  
})