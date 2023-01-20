import { Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";

export function PrivateRoute({children}){
    const auth = useAuth();
    if(auth.loading){
        return <h2>Loading...</h2>;
    }

    if(!auth.user){
        return <Navigate to="/login"/>;
    }

    return children;
}