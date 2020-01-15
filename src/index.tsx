import * as React from "react";
import {render} from "react-dom";
import Main from "./components/Main";

const root = document.getElementById("root");

const ws = new WebSocket(`wss://${window.location.hostname}:8081`);

ws.onopen = function () {
    ws.send("Hello, world!");
};

ws.onmessage = function (data) {
    console.log(data);
};

render(
    <Main />,
    root,
);
