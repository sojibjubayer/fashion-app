
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
  const targetProduct = useLoaderData();
  const { _id, name, brand, type, price, shortD, rating, image } = targetProduct;
  const handleUpdateProduct = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortD = form.sd.value;
    let rating = form.rating.value;
    if (rating < 1) {
      rating = 1;
    } else if (rating > 5) {
      rating = 5;
    }
    const image = form.image.value;

    const newProduct = { name, type, price, shortD, rating, brand, image }
    console.log(newProduct);

    // Send data to the server
    fetch(`https://fashion-app-server-psbiefrlt-sojibjubayers-projects.vercel.app/products/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            'Good job!',
            ' Successfully updated a product!',
            'success'
          )
        }
      })
  }
  // defaultValue={name} 
  const options = [
    { value: 'Adidas', label: 'Adidas' },
    { value: 'Nike', label: 'Nike' },
    { value: 'Gucci', label: 'Gucci' },
    { value: 'Levi\'s', label: 'Levi\'s' },
    { value: 'H&M', label: 'H&M' },
    { value: 'Zara', label: 'Zara' },
  ];

  return (
    
      <div className="bg-amber-200 ">
        <h2 className="text-xl md:text-2xl font-bold text-center border-b-2 py-4">Update This Product</h2>
        <div className="p-2  md:w-[70%] mx-auto">
          <form onSubmit={handleUpdateProduct}>

            {/* form name and quantity row  */}
            <div className=" md:flex gap-20">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <label className="input-group">

                  <input type="text" name="name" defaultValue={name}
                    placeholder="Product Name" className="w-full input input-bordered" required />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Brand Name </span>
                </label>
                <label className="input-group">
                  <select name="brand" defaultValue={brand}
                    className="w-[300px] h-12 pl-3 text-lg">
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

            </div>

            <div className=" md:flex gap-20">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Type </span>
                </label>
                <label className="input-group">
                  <input type="text" name="type" defaultValue={type}
                    placeholder="Type" className="w-full input input-bordered" required />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                  <input type="number" name="price" defaultValue={price}
                    placeholder="Product Price" className="w-full input input-bordered" required />
                </label>
              </div>
            </div>
            <div className=" ">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                  <textarea type="text" name="sd" defaultValue={shortD}
                    placeholder="Describe your product in short" className="w-full input input-bordered" required/>
                </label>
              </div>
            </div>
            <div className=" md:flex gap-20">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating </span>
                </label>
                <label className="input-group">

                  <input type="number" name="rating" defaultValue={rating}
                    placeholder="Rating between 1 to 5" className="w-full input input-bordered" required />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <label className="input-group">
                  <input type="text" name="image" defaultValue={image}
                    placeholder="Image URL" className="w-full input input-bordered" required/>
                </label>
              </div>
            </div>
            <input type="submit" value="submit"
              className="btn  bg-orange-500 hover:bg-green-400 mb-10 text-yellow-950 font-bold mt-5" />
          </form>
        </div>
      </div>
    
  );
};

export default UpdateProduct;