const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://35.190.180.150');

var startMqtt = function () {
    client.on('connect', function () {
        client.subscribe('piconnect-mqtt-test');
        client.publish('piconnect-mqtt-test', 'Hello from node');
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString());
    })
}

module.exports.startMqtt = startMqtt;