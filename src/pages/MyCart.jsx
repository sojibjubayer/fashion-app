import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";


const MyCart = () => {
    const cartResult=useLoaderData()
    const firebaseUser=useContext(AuthContext)


    return (
        <div>
          
            <div className="min-h-screen">
                <div>
                    <h2 className="md:w-[450px] mx-auto font-bold p-2 rounded-sm text-center text-2xl bg-black text-red-400  ">
                        Cart Products of : <span className="italic">{firebaseUser.user.displayName}</span></h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>
                    {
                        cartResult.filter(target=>target.email==firebaseUser.user.email).map(brand => <div key={brand.id}>
                            <div className="md:w-[350px] h-[400px] mx-auto bg-amber-200 rounded-t-xl">
                                <img className="w-full h-[230px] rounded-t-xl" src={brand.image} alt="" />
                                <h3 className=" text-center text-xl font-bold pt-2">{brand.name}</h3>
                                <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                                <div className="flex  justify-center">
                                    <h3 className="mr-5 text-center text-base font-bold pt-2">Price: {brand.price}$</h3>
                                    <h3 className="text-center text-base font-bold pt-2">Rating: {brand.rating}</h3>
                                </div>
                                <div className="flex  justify-center mt-5">
                                    
                                        <button  className="bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5">Add to Cart</button>
                                    
                                        
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

export default MyCart;