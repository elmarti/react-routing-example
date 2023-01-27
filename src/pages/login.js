import { useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../hooks/use-auth";

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = useCallback(async (event) => {
        event.preventDefault();
        console.log(event);
        const [, username, , password] = event.target.children;
        await auth.login(username, password)
        navigate('/');
    }, []);
    
    return <>
    <div className="links">
    <Link to="/about">About</Link>
    <Link to="/param-example/param1/second/param2/param3">Param Example</Link>
    <a href="/about">Native about</a>
    </div>
        {auth.loading ? <h2>Logging in</h2> : <form onSubmit={handleLogin}>
            <label for="username" >Username</label>
            <input type="text" id="username" />
            <label for="password" >Password</label>
            <input type="password" id="password" />
            <button type="submit">Log in</button>
        </form>}
    </>;
};