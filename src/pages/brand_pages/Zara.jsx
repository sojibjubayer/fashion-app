import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Zara = () => {
    const brandProduct = useLoaderData()
    console.log(brandProduct);

    const images = [
        'https://i.ibb.co/ph8mZ7t/1.jpg',


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const zaraProducts = brandProduct.filter(check => check.brand === 'Zara');
    console.log(zaraProducts);
    if (zaraProducts.length > 0) {
        return (
            <div>
                <div className="">

                    {/* IMAGE SLIDER */}

                    <div className="mt-2">
                        <img className="w-full h-[200px] md:h-[450px]" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                        <div className="flex gap-16 justify-center -mt-4 md:-mt-5">
                            <button onClick={prevSlide}><FaArrowAltCircleLeft className="bg-white rounded-full text-black text-3xl md:text-4xl"></FaArrowAltCircleLeft></button>
                            <button onClick={nextSlide}><FaArrowAltCircleRight className="bg-white rounded-full text-black text-3xl md:text-4xl"></FaArrowAltCircleRight></button>
                        </div>
                    </div>
                   
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>
                        {
                            zaraProducts.map(brand => (
                                <div key={brand._id}>
                                    <div className="md:w-[350px] h-[420px] mx-auto bg-amber-200 rounded-t-xl">
                                        <img className="w-full h-[230px] rounded-t-xl" src={brand.image} alt="" />
                                        <h3 className=" text-center text-xl font-bold  bg-[#438A92] text-yellow-400">{brand.name}</h3>
                                        <h3 className="-mt-2 text-center text-base font-bold pt-2">Brand: {brand.brand}</h3>
                                        <h3 className="text-center text-base font-bold pt-2">Category: {brand.type}</h3>
                                        <div className="flex justify-center">
                                            <h3 className="mr-5 text-center text-base font-bold pt-2">Price: {brand.price}$</h3>
                                            <h3 className="text-center text-base font-bold pt-2">Rating:
                                                <span className="bg-white px-1 rounded ml-1">{brand.rating}</span>
                                            </h3>
                                        </div>
                                        <div className="flex justify-center mt-5">
                                            <Link to={`/productDetails/${brand._id}`}>
                                                <button className="bg-[#FFA171] hover:bg-green-400 btn btn-sm mr-5">Details</button>
                                            </Link>
                                            <Link to={`../updateProduct/${brand._id}`}>
                                                <button className="bg-[#FFA171] hover:bg-green-400 btn btn-sm">Update</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Helmet>
                        <title>FA | Zara </title>
                    </Helmet>
                </div>
            </div>


        );
    } else {
        return (
            <div className="mt-2 min-h-screen">
                <img className="w-full h-[200px] md:h-[450px]" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                <div className="flex gap-16 justify-center -mt-4 md:-mt-5">
                    <button onClick={prevSlide}><FaArrowAltCircleLeft className="bg-white rounded-full text-black text-3xl md:text-4xl"></FaArrowAltCircleLeft></button>
                    <button onClick={nextSlide}><FaArrowAltCircleRight className="bg-white rounded-full text-black text-3xl md:text-4xl"></FaArrowAltCircleRight></button>
                </div>
                <div>
                    <h3 className="text-2xl text-center font-bold my-10 text-red-400">No product available now!</h3>
                </div>
                <Helmet>
                    <title>FA | Zara </title>
                </Helmet>

            </div>

        )
    }

};

export default Zara;