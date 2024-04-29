import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Root = () => {
    return (
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