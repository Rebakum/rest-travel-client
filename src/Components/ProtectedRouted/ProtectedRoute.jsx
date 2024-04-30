import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext) || {}
    const location = useLocation()



    return (
        <div>
            
            {currentUser ?<> {children}</>
            
             :
                <Navigate state={location.pathname} to={`/login`} replace />

            }

        </div>
    );
};

export default ProtectedRoute;