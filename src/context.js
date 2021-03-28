import React, { createContext, useContext, useReducer } from "react";

const appContext = createContext();

const initialState = {
    appLoading: true,
    initializeApp: false
}

const appReducer = (state, action) => {
    switch (action.type) {
        case 'stopLoading':
            return {
                initializeApp: true
            }
            default:
                return "Default"
    }
} 

const AppProvider = function(props) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <appContext.Provider value={{state, dispatch}}>
            { props.children }
        </appContext.Provider>
    )
}

const useAppContext = function() {
    useContext(AppContext);
}

export {
    AppProvider, useAppContext
}