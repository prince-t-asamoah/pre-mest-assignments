import React, { createContext, useContext} from "react";

const AppContext = createContext();


const AppProvider =(props)=> {

    function add(x, y) {
        return x + y
    }

    return (
        <AppContext.Provider value={{add}}>
            { props.children }
        </AppContext.Provider>
    )
}

const useAppContext =() => useContext(AppContext);


export {
    AppProvider, useAppContext
}