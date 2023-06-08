import React, { createContext, useContext, useState } from 'react'

interface GlobalProps {
    todos: any;
    setTodos: React.Dispatch<React.SetStateAction<any>>;
}
export const GlobalContext = createContext({} as GlobalProps);
const GlobalContextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState([]);
    return (
        <GlobalContext.Provider value={{ todos, setTodos }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextWrapper;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}