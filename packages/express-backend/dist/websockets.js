"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
function websockets(expressServer) {
    const wss = new ws_1.default.Server({
        noServer: true,
        path: "/ws"
    });
    const connections = [];
    expressServer.on("upgrade", (request, socket, head) => {
        const url = request.url || "";
        const matches = url.match(/.*\?channel=(\w+)/);
        const channel = matches ? matches[1] : "global";
        console.log("Got an upgrade request on channel", channel);
        wss.handleUpgrade(request, socket, head, (websocket) => {
            connections.push({ channel, client: websocket });
            wss.emit("connection", websocket, request);
        });
    });
    wss.on("connection", (wsc) => {
        //connection is up, let's add a simple simple event
        wsc.on("message", (message) => {
            const conn = connections.find((c) => c.client === wsc);
            const { channel } = conn || {};
            const clients = connections
                .filter((c) => c.channel === channel)
                .map((c) => c.client);
            //log the received message and send it to all clients on channel
            console.log("received, echoing: %s", message, channel);
            clients.forEach((wsc) => wsc.send(message.toString()));
        });
    });
    return wss;
}
exports.default = websockets;
