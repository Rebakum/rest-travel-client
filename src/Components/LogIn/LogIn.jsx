import { Link } from "react-router-dom";
import Travel02 from "../../assets/images/travel02.png"


const LogIn = () => {
    return (
        <div className="hero min-h-screen ">
            <div className=" flex  justify-between items-center shadow-2xl gap-0 p-5">
                <div className="text-center lg:text-left flex-1">

                    <img className="" src={Travel02} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl text-center font-bold">Login now!</h1>

                    <div className=" shrink-0 w-full h-full justify-center items-center flex-1 p-5">

                        <form className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>

                            <div className="flex justify-between items-center">
                                <label htmlFor="" className="label">
                                    <Link className="text-primary" >Porgot password !</Link>
                                    <small>No account plese <Link to="/register" className="text-primary">Register</Link></small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;