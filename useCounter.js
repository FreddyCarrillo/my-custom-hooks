import { useState } from 'react';

export const useCounter = (initialState = 1) => {
    
    const [state, setstate] = useState(initialState);

    const increment = (interval = 1) => {
        setstate(state + interval);
    }

    const decrement = (interval = 1) =>  {
        setstate(state - interval);
    }

    const reset =() => {
        setstate(initialState);
    }

    return { state, increment, decrement, reset};

}
