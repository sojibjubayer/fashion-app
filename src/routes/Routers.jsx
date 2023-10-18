import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouters from "./PrivateRouters";
import NotFound from "../pages/NotFound";
import ContactUs from "../pages/ContactUs";
import MyCart from "../pages/MyCart";
import Adidas from "../brand_pages/Adidas";
import Nike from "../brand_pages/Nike";
import Gucci from "../brand_pages/Gucci";
import Levis from "../brand_pages/Levis";
import HnM from "../brand_pages/HnM";
import Zara from "../brand_pages/Zara";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/brands.json')
            },
            {
                path:'/adidas',
                element:<PrivateRouters><Adidas></Adidas></PrivateRouters>
            },
            {
                path:'/nike',
                element:<PrivateRouters><Nike></Nike></PrivateRouters>
            },
            {
                path:'/gucci',
                element:<PrivateRouters><Gucci></Gucci></PrivateRouters>
            },
            {
                path:`/levi's`,
                element:<PrivateRouters><Levis></Levis></PrivateRouters>
            },
            {
                path:'/h&m',
                element:<PrivateRouters><HnM></HnM></PrivateRouters>
            },
            {
                path:'/zaras',
                element:<PrivateRouters><Zara></Zara></PrivateRouters>
            },
            {
                path:'/addproduct',
                element:<PrivateRouters><AddProduct></AddProduct></PrivateRouters>
            },
            {
                path:'/mycart',
                element:<PrivateRouters><MyCart></MyCart></PrivateRouters>
            },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            
        ]

    },
]);

export default router;