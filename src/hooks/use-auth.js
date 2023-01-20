import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {useHistory, useLocation} from 'react-router-dom';
import {authService} from '../services/auth.service'


const AuthContext = createContext({});


export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * Load the user when the application initially loads
     */
    useEffect(() => {
        async function getUser(){
            setLoading(true);
            const user = await authService.getUser();
            setUser(user);
            setLoading(false);
        }
        // getUser();
    }, []);

    async function login(username, password){
        setLoading(true);
        // Needs error handling to deal with login failure
        const user = await authService.login(username, password);
        setUser(user);
        setLoading(false);
    }

    async function logout(){
        setUser(null);
    }

    const memoizedValue = useMemo(() => ({
        user,
        loading,
        login,
        logout
    }), [user, loading]);

    return <>
        <AuthContext.Provider value={memoizedValue}>
            {children}
        </AuthContext.Provider>
    </>

}

export default function useAuth(){
    return useContext(AuthContext);
}