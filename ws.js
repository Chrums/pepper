const WebSocket = require('ws');

const port = 8081;

const wss = new WebSocket.Server({ port });
console.log(`Socket server started: http://localhost:${port}`);

wss.on('connection', function connection(ws) {
    
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
    
});