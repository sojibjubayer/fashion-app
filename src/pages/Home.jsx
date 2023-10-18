
import { Helmet } from "react-helmet";
import bannerImage from '../assets/fabanner.jpg'
import { useLoaderData } from "react-router-dom";



const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
  

    return (
        <div className="min-h-screen">
            <div className="my-4">
                 <img  className="w-full h-[40vh]  md:h-[70vh] mx-auto" src={bannerImage} alt="" />
            </div>
            <div>
                <h2 className=" font-bold p-2 rounded-sm text-white bg-[#FFA171]  ">Brand Name</h2>
            </div>
            Brand image and name go here
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>

                    
                    {
                        brands.map(brand=><div key={brand.id}>
                            <div>
                                <img src={brand.image} alt="" />
                                <h3>{brand.name}</h3>

                            </div>
                        </div>)
                    }
                
            </div>
           

            <Helmet>
                <title>FA | Home </title>
            </Helmet>
        </div>
    );
};

export default Home;