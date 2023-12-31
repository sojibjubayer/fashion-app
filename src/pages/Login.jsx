import { useContext, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import googlelogo from '../assets/googlelogo.webp'

const Login = () => {
    const { signIn, signInWithGoogle, user } = useContext(AuthContext);
    const emailRef = useRef(null)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        <Navigate to='/'></Navigate>
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully signed in.');
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                toast.error('Email or Password does not match!')
            })
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch()
    }
    const handleLogin2 = () => {
        if (user)
            return <Navigate to='/'></Navigate>
    }
    return (
        <div >
            <div className="hero md:min-h-screen  ">
                <div className="hero-content flex-col bg-[#FFA171] rounded my-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl  font-bold ">Login now!</h1>
                    </div>
                    <div className="card md:w-full w-[250px] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailRef}
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleLogin2} className="btn bg-[#FFA171]">Login</button>
                                <button onClick={handleSignInWithGoogle}
                                    className="btn btn-ghost mt-3 bg-green-800 text-white">Login with 
                                    <img className="w-6" src={googlelogo} alt="" /></button>
                            </div>
                            <Link to='/register'>
                                <p>Have not an account? Please <span className="text-blue-600">Register</span></p>
                            </Link>
                        </form>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;