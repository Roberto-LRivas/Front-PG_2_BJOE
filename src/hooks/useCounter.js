//Es una simple funcion
import { useState } from "react/cjs/react.development";


export const useCounter = ( InicialState = 1 ) => {

    const [state, setState] = useState(InicialState);

    const increment = () => {
        setState(state + 1 );
        //console.log('DESDE hook counter', state);
    }

    const decrement = () => {
        setState(state - 1);
    }

    const reset = () => setState(InicialState);

    return {
        state,
        increment,
        decrement,
        reset
    };
   
}