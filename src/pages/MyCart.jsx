import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const MyCart = () => {
    const cartResult = useLoaderData()
    const[cartProduct,setCartProduct]=useState(cartResult)
    console.log(cartProduct);

    const firebaseUser = useContext(AuthContext)

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
               
                console.log('deleted');

                fetch(`http://localhost:5000/cart/${_id}`,{
                    method:'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                         Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
                // filter from cart products and set it to remaining cart product
                const remaining=cartProduct.filter(fProduct=>fProduct._id != _id)
                setCartProduct(remaining)
                    }
                })
            }
        })
    }

    return (
        <div>

            <div className="min-h-screen">
                <div>
                    <h2 className="md:w-[350px] mx-auto font-bold p-2 rounded-sm text-center text-xl rounded-b-xl md:text-2xl bg-orange-200 text-zinc-600  ">
                       Your Cart Products </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>
                    {
                        cartProduct.filter(target => target.email == firebaseUser.user.email).map(brand => <div key={brand._id}>
                            <div className="md:w-[350px] h-[400px] mx-auto bg-amber-200 rounded-t-xl">
                                <img className="w-full h-[230px] rounded-t-xl" src={brand.image} alt="" />
                                <h3 className=" text-center text-xl font-bold pt-2">{brand.name}</h3>
                                <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                                <div className="flex  justify-center">
                                    <h3 className="mr-5 text-center text-base font-bold pt-2">Price: {brand.price}$</h3>
                                    <h3 className="text-center text-base font-bold pt-2">Rating: {brand.rating}</h3>
                                </div>
                                <div className="flex  justify-center mt-5">

                                    <button
                                        onClick={() => handleDelete(brand._id)} className="bg-amber-200 border-2  border-red-200 hover:bg-red-500 btn btn-sm mr-5">Delete from cart</button>


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