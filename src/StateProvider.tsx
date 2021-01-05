import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext<any>('');

// Much easier to set up, as opposed to Redux for example.
export const StateProvider = ({ reducer, initialState, children } : any) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Custom hook
export const useStateValue = () => useContext(StateContext);