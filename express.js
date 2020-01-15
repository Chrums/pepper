const path = require('path');
const express = require('express');

const accountRouter = require('./routers/account');

const app = express();
const port = 8080;

app.use('/accounts', accountRouter);
app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(
    port,
    () => {
        console.log(`Express server started: http://localhost:${port}`);
    }
);
