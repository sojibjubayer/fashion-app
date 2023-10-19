import { useContext } from "react";
import { Helmet } from "react-helmet";
import {  useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const AdidasDetails = () => {
    const params=useParams()
    const brandProduct=useLoaderData()
    console.log(params);
    console.log(brandProduct);

    const firebaseUser=useContext(AuthContext)
    console.log(firebaseUser);
    

    const handleAddToCart = getBrand => {
        const {name,type,price,rating,brand,image}=getBrand
        const cartBrand ={name,type,price,rating,brand,image}
        cartBrand.email=firebaseUser.user.email
        console.log(brand);
        
        fetch('http://localhost:5000/cart', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartBrand)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire(
                'Good job!',
                'Product Added Successfully to cart!',
                'success'
              )
            }
          })
          
      }
    return (  
            <div className="min-h-screen">
                <div className='grid grid-cols-1  py-7'>
                    {
                        brandProduct.filter(target=>target._id==params.id).map(brand => <div key={brand.id}>
                            <div className="md:w-1/2  mx-auto bg-amber-200 rounded-t-xl">
                                <img className="w-full h-[330px] rounded-t-xl" src={brand.image} alt="" />
                                <h3 className=" text-center text-xl font-bold pt-2">{brand.name}</h3>
                                <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                                <div className="flex  justify-center">
                                    <h3 className="mr-5 text-center text-base font-bold pt-2">Price: {brand.price}$</h3>
                                    <h3 className="text-center text-base font-bold pt-2">Rating: 
                                    <span className="bg-white px-1 rounded ml-1">{brand.rating}</span></h3>
                                </div>
                                <div className="flex  justify-center">
                                    <p className="mt-4"> Details: <span className="bg-white p-2 rounded-lg">{brand.shortD}</span></p>
                                </div>
                                <div className="flex  justify-center ">
                                    
                                        <button onClick={()=>handleAddToCart(brand)} className="my-5 bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5">Add to Cart</button>
                         
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <Helmet>
                    <title>FA | Adidas </title>
                </Helmet>
            </div>
    );
};

export default AdidasDetails;