var S = require('socket.io');

let broadcastToAll = function (socket, io) {
    socket.on( 'piconnect-socket-io', function (data) {
        io.emit( 'piconnect-socket-io', data );
    });
}

var startIo = function(server){
    const io = S.listen(server);
    io.on('connection', function(socket) {
        broadcastToAll(socket, io)
    });

    return io;
};

module.exports.startIo = startIo