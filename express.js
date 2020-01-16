const path = require('path');
const express = require('express');

const accountsRouter = require('./routers/accounts');
const lobbiesRouter = require('./routers/lobbies');

const app = express();
const port = 8080;

app.use(express.static(path.resolve(__dirname, "dist")));
app.use('/api/accounts', accountsRouter);
app.use('/api/lobbies', lobbiesRouter);
app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, "dist", "index.html")));

app.listen(
    port,
    () => {
        console.log(`Express server started: http://localhost:${port}`);
    }
);
