import * as React from "react";
import * as ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Main from "./components/Main";

const ws = new WebSocket(`wss://${window.location.hostname}:8081`);

ws.onopen = function () {
    ws.send("Hello, world!");
};

ws.onmessage = function (data) {
    console.log(data);
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
    </ThemeProvider>,
    document.querySelector('#root')
);
