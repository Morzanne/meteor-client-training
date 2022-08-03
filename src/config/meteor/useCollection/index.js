import { useContext, useEffect, useReducer } from 'react';
import { MeteorContext } from '../context';

function reducer(state, action) {
    switch (action.type) {
        case "update":
            return {
                data: action.payload
            };
        default:
            return {
                data: state.data
            }
    }
};

const noFilter = () => true;

let initialState = { data: null };

export const useCollection = (name, filter = noFilter) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const server = useContext(MeteorContext);

    useEffect(() => {
        if (!server) {
            return () => { };
        }

        let reactiveCursor = server.collection(name).filter(filter).reactive();
        reactiveCursor.onChange(newData => {
            return dispatch({ type: "update", payload: newData })
        });

        dispatch({ type: "update", payload: reactiveCursor.data() })

        return () => reactiveCursor.stop();

    }, [server, name, filter]);

    return state.data;
};