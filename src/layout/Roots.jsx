import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";


const Roots = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (

        <div className={` ${isDarkTheme ? 'bg-white' : 'bg-[#333]'}`}>
            <div className="w-[90%] mx-auto">
                <Navbar></Navbar>
                <div className="flex justify-end">
                    <button className="bg-teal-400 text-end px-1 rounded-l-sm text-white" onClick={toggleTheme}>
                        {isDarkTheme ? 'dark mode ' : 'light mode '}
                    </button>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;