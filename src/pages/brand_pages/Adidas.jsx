import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";


const Adidas = () => {
    const brandProduct = useLoaderData()
    console.log(brandProduct);
    return (
        <div>
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
                        brandProduct.map(brand => <div key={brand.id}>
                            <div className="md:w-[350px] h-[420px] mx-auto bg-amber-200 rounded-t-xl">
                                <img className="w-full h-[230px] rounded-t-xl" src={brand.image} alt="" />
                                <h3 className=" text-center text-xl font-bold pt-2">{brand.name}</h3>
                                <h3 className="-mt-2 text-center text-base font-bold pt-2">Brand: {brand.brand}</h3>
                                <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                                <div className="flex  justify-center">
                                    <h3 className="mr-5 text-center text-base font-bold pt-2">Price: {brand.price}$</h3>
                                    <h3 className="text-center text-base font-bold pt-2">Rating:
                                        <span className="bg-white px-1 rounded ml-1">{brand.rating}</span></h3>
                                </div>
                                <div className="flex  justify-center mt-5">
                                    <Link to={`/adidas/${brand._id}`}>
                                        <button className="bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5">Details</button>
                                    </Link>
                                    <Link to={`../updateProduct/${brand._id}`}>
                                        <button className="bg-[#FFA171] hover:bg-green-400 btn btn-sm">Update</button>
                                    </Link>
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

export default Adidas;