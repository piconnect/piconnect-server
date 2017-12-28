const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

var startMqtt = function () {
    client.on('connect', function () {
        client.subscribe('presence')
        client.publish('presence', 'Hello mqtt')
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString());
        client.end();
    })  
}

module.exports.startMqtt = startMqtt;