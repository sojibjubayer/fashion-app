import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const ProductDetails = () => {
  const params = useParams()
  const brandProduct = useLoaderData()
  console.log(params);
  console.log(brandProduct);

  const firebaseUser = useContext(AuthContext)
  console.log(firebaseUser);


  const handleAddToCart = getBrand => {
    const { name, type, price, rating, brand, image } = getBrand
    const cartBrand = { name, type, price, rating, brand, image }
    cartBrand.email = firebaseUser.user.email
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
    <div className="bg-slate-200">
      <div className='grid grid-cols-1  py-7'>
        {
          brandProduct.filter(target => target._id == params.id).map(brand => <div key={brand.id}>
            <div className="md:flex md:flex-row flex-col gap-10">
              <div className="md:w-1/3">
                <img className="w-full md:w-[450px] h-[250px] md:h-[330px] rounded-r-xl" src={brand.image} alt="" />
              </div>
              <div className="p-2 md:w-2/3">
                <h3 className=" text-center text-xl font-bold pt-2">{brand.name}</h3>
                <h3 className=" text-center text-base font-bold pt-2">Brand: {brand.brand}</h3>
                <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                <div className="flex  justify-center">
                  <h3 className="mr-5 text-center text-base font-bold pt-2"><span className="font-bold">Price:</span> {brand.price}$</h3>
                  <h3 className="text-center text-base font-bold pt-2"><span className="font-bold">Rating:</span>
                    <span className="bg-white px-1 rounded ml-1">{brand.rating}</span></h3>
                </div>
                <div className="flex  justify-center">
                  <p className="mt-4"> <span className="font-bold">Details:</span> <span className="">{brand.shortD}</span></p>
                </div>
                <div className="flex  justify-center ">

                  <button onClick={() => handleAddToCart(brand)} className="my-5 bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5 font-bold">Add to Cart</button>

                </div>
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

export default ProductDetails;