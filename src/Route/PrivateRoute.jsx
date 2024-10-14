import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className=" text-center text-yellow-300 text-3xl h-screen">Loading...</div>
    }

    if (user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to={"/signIn"}></Navigate>
};

export default PrivateRoute;