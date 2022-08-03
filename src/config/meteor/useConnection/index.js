import { useEffect, useReducer } from 'react';
import { buildServer } from '../buildServer';

export const bindConnect = async server => {
    server.on('connected', () => console.info('connected'));
    server.on('disconnected', () => console.info('disconnected'));

    await server.connect();
};

function reducer(state, action) {
    switch (action.type) {
        case "setServer":
            return {
                data: action.payload
            };
        default:
            return {
                data: state.data
            }
    }
}

let initialState = { data: null };

export const useConnection = (endpoint) => {
   
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const server = buildServer(endpoint);
        const connect = async () => {
            await bindConnect(server);
          };
        dispatch({ type: 'setServer', payload: server });
        connect()

    }, [endpoint]);
    return state.data;
};