import simpleDDP from 'simpleddp';
import ws from 'isomorphic-ws';

export const buildServer = endpoint => {

    const options = {
        endpoint: endpoint || "ws://localhost:3000/websocket",
        SocketConstructor: ws,
        reconnectInterval: 10000
    };

    const server = new simpleDDP(options);

    return server;
};