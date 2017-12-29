const mqtt = require('mqtt');

let mqttHandler = new Object;

const client = mqtt.connect('mqtt://35.190.180.150');

mqttHandler.startMqtt = function () {
    client.on('connect', function () {
        client.subscribe('piconnect-mqtt-test');
    })

    client.on('message', function (topic, message) {
        let io = require('./socket');
        io.broadcastMqttMessage( message.toString() )
    })
}

mqttHandler.publishMessage = function (message) {
    client.publish('piconnect-mqtt-test', message);
}

module.exports = mqttHandler;