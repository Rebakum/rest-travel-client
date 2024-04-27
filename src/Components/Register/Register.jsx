import { Link } from 'react-router-dom';
import Travel01 from '../../assets/images/travel01.png';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className=" min-h-screen p-10 mx-20 ">
                <div className=" flex justify-center items-center  shadow-2xl p-5 ">
                    <div className="text-center flex-1 lg:text-left">
                        <h1 className="text-3xl font-bold  text-center my-1">New Here please Register!</h1>
                        <div className="card shrink-0 w-full h-full bg-base-100 p-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} /> {errors.name && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" {...register("email", { required: true })} /> {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" name='PhotoURL' placeholder="PhotoURL" className="input input-bordered" {...register("PhotoURL")} />                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered"{...register("password", { required: true })} /> {errors.password &&<span className='text-red-500'>This field is required</span>}
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Have an account <span className='text-primary'>Login now</span></Link>
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='flex-1 w-full h-full '>
                        <img className='  border  rounded-2xl' src={Travel01} alt="" />
                    </div>

                </div>
            </div>

        </div>


    );
};

export default Register;