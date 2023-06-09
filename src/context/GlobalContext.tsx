import React, { createContext, useContext, useEffect, useState } from 'react'
import { USER_INFO } from '../contants';

interface UserInfo {
    username: string;
    password: string;
}
interface GlobalProps {
    todos: any;
    setTodos: React.Dispatch<React.SetStateAction<any>>;
    userData: UserInfo;
    setUserData: React.Dispatch<React.SetStateAction<UserInfo>>;
}
export const GlobalContext = createContext({} as GlobalProps);
const GlobalContextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [userData, setUserData] = useState<UserInfo>({
        username: "",
        password: ""
    });
    useEffect(() => {
        const user = localStorage.getItem(USER_INFO);
        if (user) {
            setUserData(prev => ({ ...prev, username: user }));
        }
    }, []);
    return (
        <GlobalContext.Provider value={{ todos, setTodos, setUserData, userData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextWrapper;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}