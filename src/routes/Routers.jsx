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
import Adidas from "../pages/brand_pages/Adidas";
import Nike from "../pages/brand_pages/Nike";
import Gucci from "../pages/brand_pages/Gucci";
import Levis from "../pages/brand_pages/Levis";
import HnM from "../pages/brand_pages/HnM";
import Zara from "../pages/brand_pages/Zara";
import UpdateProduct from "../pages/UpdateProduct";
import ProductDetails from "../pages/detailsPages/ProductDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/Adidas',
                element: <PrivateRouters><Adidas></Adidas></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/Nike',
                element: <PrivateRouters><Nike></Nike></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: '/Gucci',
                element: <PrivateRouters><Gucci></Gucci></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: '/Levi\'s',
                element: <PrivateRouters><Levis></Levis></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: '/h&m',
                element: <PrivateRouters><HnM></HnM></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: '/zaras',
                element: <PrivateRouters><Zara></Zara></PrivateRouters>,
            },
            {
                path: '/addproduct',
                element: <PrivateRouters><AddProduct></AddProduct></PrivateRouters>
            },
            {
                path: '/mycart',
                element: <PrivateRouters><MyCart></MyCart></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path:'/productDetails/:id',
                element:<PrivateRouters><ProductDetails></ProductDetails></PrivateRouters>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path:'/updateProduct/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)            
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
        ]
    },
]);

export default router;