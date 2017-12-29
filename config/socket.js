const S = require('socket.io');

let IoHandler = new Object;

let broadcastToAll = function (socket) {
    socket.on( 'piconnect-socket-io', function (data) {
        IoHandler.io.emit( 'piconnect-socket-io', data );
    });
}

let listenForMqtt = function (socket) {
    socket.on('piconnect-mqtt-test', function (data) {
        const mqttc = require('./mqtt');
        mqttc.publishMessage( data );
    });
}

IoHandler.startIo = function(server){
    IoHandler.io = S.listen(server);
    IoHandler.io.on('connection', function(socket) {
        broadcastToAll(socket);
        listenForMqtt(socket);
    });
};

IoHandler.broadcastMqttMessage = function ( message ) {
    console.log(message);
    IoHandler.io.emit('piconnect-mqtt-test', message);
}

module.exports = IoHandler