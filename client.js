var server = process.env.SERVER || "localhost:5000"
var WebSocket = require('ws');
var ws = new WebSocket('ws://' + server + '/path');
ws.on('open', function() {
    ws.send('client sends something via websockets');
});
ws.on('message', function(data, flags) {
    console.log('received: %s', data);
});
