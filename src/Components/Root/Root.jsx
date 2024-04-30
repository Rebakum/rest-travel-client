import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Root = () => {
const currentUser =useContext(AuthContext)
    return (
        // {
        //     currentUser?

        //     : loader
        // }
            <div className="poppins">
            <Navbar></Navbar>
            <div className="mt-[70px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
        
        
    );
};

export default Root;