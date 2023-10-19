import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';


const Adidas = () => {
    const brandProduct = useLoaderData()
    console.log(brandProduct);


    const images = [
        'https://i.ibb.co/wL0SyXd/adidas-ad3.jpg',
        'https://i.ibb.co/RzT5QjB/adidas-ad1.png',
        'https://i.ibb.co/48x1SsY/adidas-ad2.png'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };




    return (
        <div>
            <div className="min-h-screen">

                {/* IMAGE SLIDER */}
              
                <div className="my-4">
                    <img className="w-full h-[200px] md:h-[450px]" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                    <div className="flex gap-10 justify-center mt-1">
                        <button onClick={prevSlide}><FaArrowAltCircleLeft className="text-[#FFA171] text-2xl"></FaArrowAltCircleLeft></button>
                        <button onClick={nextSlide}><FaArrowAltCircleRight className="text-[#FFA171] text-2xl"></FaArrowAltCircleRight></button>
                    </div>
                </div>
                <div className="pt-4">
                    <h2 className="md:w-[350px] mx-auto  font-bold p-2 rounded-xl text-center text-white text-2xl bg-amber-200   ">
                         <span className="italic">Happy Shopping</span></h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>
                    {
                        brandProduct.map(brand => <div key={brand._id}>
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