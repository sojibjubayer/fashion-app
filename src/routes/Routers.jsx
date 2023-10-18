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