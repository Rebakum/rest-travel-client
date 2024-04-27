import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin, githubLogin, twitterLogin} = useContext(AuthContext)
    return (
        <div className="">
            <div className="divider">contiue with</div>
            <div className="flex justify-center items-center gap-3">
            <div className="">
                <button onClick={()=>googleLogin()} className="btn btn-sm btn-secondary">Google</button>
            </div>
            <div className="">
                <button onClick={()=>githubLogin()} className="btn btn-sm btn-primary">gitHub</button>
            </div>
            <div className="">
                <button onClick={()=>twitterLogin()} className="btn btn-sm btn-primary">twitter</button>
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;