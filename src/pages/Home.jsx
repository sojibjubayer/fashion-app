
import { Helmet } from "react-helmet";
import bannerImage from '../assets/fabanner.jpg'
import { Link, useLoaderData } from "react-router-dom";



const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
  

    return (
        <div className="min-h-screen">
            <div className="my-4">
                 <img  className="w-full h-[40vh]  md:h-[70vh] mx-auto" src={bannerImage} alt="" />
            </div>
            <div>
                <h2 className="md:w-[450px] mx-auto font-bold p-2 rounded-sm text-center text-2xl bg-black text-yellow-400  ">
                    Our Brand New Products From</h2>
            </div>
           
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>           
                    {
                        brands.map(brand=><div key={brand.id}>
                            <Link to={`/${brand.name}`}>
                            <div className="md:w-[350px] h-[250px] mx-auto bg-amber-200 rounded-t-xl">
                                <img className="w-full h-[200px] rounded-t-xl" src={brand.image} alt="" />
                                <h3 className="text-center text-xl font-bold pt-2">{brand.name}</h3>
                            </div>
                            </Link>
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