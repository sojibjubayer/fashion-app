import { useContext } from "react";
import logo from '../assets/titleimage.png'
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('successfully logged out'))
            .catch(error => console.log(error))
    }
    
    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " border-b-2 border-white " : ""
        }>Home</NavLink></li>
        <li><NavLink to='/addproduct'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " border-b-2 border-white " : ""
            }
        >Add Product</NavLink></li>
        <li><NavLink to='/mycart'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 
                " border-b-2 border-white " : ""
            } >My Cart</NavLink></li>
    </>
    return (
        <div className="">


            <nav className="bg-[#FFA171] px-3 flex flex-col  md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <div className="hidden  md:flex gap-3 items-center mr-[200px]">
                        <img src={logo} className="w-16 h-16 " alt="" />
                        <h3 className="text-xl font-semibold text-zinc-950">Fashion APp</h3>
                    </div>

                    <ul className="flex flex-col md:flex-row  gap-10 text-black md:font-semibold md:text-xl">

                        <li className="flex gap-10">{navLinks}</li>
                        

                    </ul>
                </div>
                <div>

                    <div className=" flex items-center my-5 md:my-0">
                        <div className="text-white flex items-center">
                            
                            {
                                user && <img className="w-10 h-10 rounded-full mr-1" src={user.photoURL} alt='' />

                            }
                            {
                                user && user.displayName
                            }
                        </div>

                        {
                            user ?
                                <Link to='/' onClick={handleLogOut} ><button className="btn btn-sm ml-3  text-black bg-[#FFA171]">Log Out</button></Link>
                                :
                                <Link to='/login'><button className="btn btn-sm ml-3 text-black bg-[#FFA171]">Login</button></Link>

                        }

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;



