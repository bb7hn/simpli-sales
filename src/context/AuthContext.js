import { createContext, useContext, useState, useEffect } from "react";


const Context = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))) || false;

    const data = {
        user,
        setUser
    }

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user));
    },[user])

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
}
const useAuth = () => useContext(Context);
const getToken = ()=>{let user = JSON.parse(localStorage.getItem('user'));return user.token || false}
export {useAuth, getToken}