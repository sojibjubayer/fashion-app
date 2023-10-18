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
            this is adidas details page
            <div className="min-h-screen">
                <div className="my-4">
                    <img className="w-full h-[40vh]  md:h-[70vh] mx-auto" src="" alt="" />
                </div>
                <div>
                    <h2 className="md:w-[450px] mx-auto font-bold p-2 rounded-sm text-center text-2xl bg-black text-red-400  ">
                        Adidas: <span className="italic">Happy Shopping</span></h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>
                    {
                        brandProduct.filter(target=>target._id==params.id).map(brand => <div key={brand.id}>
                            <div className="md:w-[350px] h-[400px] mx-auto bg-amber-200 rounded-t-xl">
                                <img className="w-full h-[230px] rounded-t-xl" src={brand.image} alt="" />
                                <h3 className=" text-center text-xl font-bold pt-2">{brand.name}</h3>
                                <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                                <div className="flex  justify-center">
                                    <h3 className="mr-5 text-center text-base font-bold pt-2">Price: {brand.price}$</h3>
                                    <h3 className="text-center text-base font-bold pt-2">Rating: {brand.rating}</h3>
                                </div>
                                <div className="flex  justify-center mt-5">
                                    
                                        <button onClick={()=>handleAddToCart(brand)} className="bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5">Add to Cart</button>
                                    
                                        
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <Helmet>
                    <title>FA | Adidas </title>
                </Helmet>
            </div>


        </div>
    );
};

export default AdidasDetails;