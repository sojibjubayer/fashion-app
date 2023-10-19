
import { Helmet } from "react-helmet";
import bannerImage from '../assets/fabanner.jpg'
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";



const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    const [loading, setLoading] = useState(true);
    const [fetchData, setFetchdata] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then((productsData) => {
                console.log(productsData);
                setFetchdata(productsData)
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="">
            <div className="my-4">
                <img className="w-full h-[40vh]  md:h-[70vh] mx-auto" src={bannerImage} alt="" />
            </div>
            <div>
                <h2 className="mt-10 md:w-[400px] mx-auto font-bold p-2 rounded-lg text-center text-xl md:text-2xl bg-black text-yellow-400  ">
                    Explore Through Brands</h2>
            </div>

            <div className="mt-4 w-full">
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 pb-6'>
                    {
                        brands.map(brand => <div key={brand.id}>
                            <Link to={`/${brand.name}`}>
                                <div className="md:w-[350px] h-[250px] mx-auto bg-amber-200 rounded-t-xl">
                                    <img className="w-full h-[200px] rounded-t-xl" src={brand.image} alt="" />
                                    <h3 className="text-center text-xl font-bold pt-2">{brand.name}</h3>
                                </div>
                            </Link>
                        </div>)
                    }

                </div>
            </div>

             
                    {/* NEW ARRIVAL SECTION  */}

            <div>
                <div>
                    <h2 className=" italic mb-5 mt-14 md:w-[400px] mx-auto font-bold p-2 rounded-lg text-center text-2xl bg-black text-emerald-500  ">
                        New Arrival</h2>
                </div>
                <div>
                    {loading ? (
                        <span className="loading loading-spinner text-accent"></span>
                    ) : (

                        <>

                            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 pb-7'>
                                {
                                    fetchData.slice(-3).reverse().map(brand => <div key={brand._id}>
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
                                                <Link to={`/productDetails/${brand._id}`}>
                                                    <button className="bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5">Details</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>


                        </>
                    )}
                </div>
            </div>

            {/* VISIT OUR BRANDS  */}

            <div>
                <div>
                    <h2 className=" italic mb-5 mt-14 md:w-[400px] mx-auto font-bold p-2 rounded-lg text-center text-2xl bg-black text-emerald-500  ">
                        Visit Our Brands</h2>
                </div>
                <div>
                <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-6 mb-10 gap-2'>
                    {
                        brands.map(brand => <div key={brand.id}>
                            <Link to={`${brand.website}`}>
                                <div className=" mx-auto  rounded-t-xl">
                                    <img className="w-[150px] h-[100px] " src={brand.image} alt="" />
                                    
                                </div>
                            </Link>
                        </div>)
                    }

                </div>

                </div>
                
            </div>
            <Helmet>
                <title>FA | Home </title>
            </Helmet>
        </div>
    );
};

export default Home;