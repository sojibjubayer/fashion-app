import Swal from "sweetalert2";


const AddProduct = () => {
  // const Swal = require('sweetalert2')

  const handleAddProduct = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortD=form.sd.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const newProduct = { name, type, price,shortD, rating, brand, image }
    console.log(newProduct);

    // Send data to the server
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            'Good job!',
            'You Successfully added a product!',
            'success'
          )
        }
      })
      form.reset();
  }

  const options = [
    { value: 'Adidas', label: 'Adidas' },
    { value: 'Nike', label: 'Nike' },
    { value: 'Gucci', label: 'Gucci' },
    { value: 'Levis', label: 'Levis' },
    { value: 'HnM', label: 'HnM' },
    { value: 'Zara', label: 'Zara' },
  ];
  return (
    <div className="bg-[#FED5A3] p-10">
      <h2 className="text-2xl">Add Product  page</h2>
      <form onSubmit={handleAddProduct}>

        {/* form name and type row  */}
        <div className=" md:flex gap-20">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">

              <input type="text" name="name" placeholder="Product Name" className="w-full input input-bordered" required />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name </span>
            </label>
            <label className="input-group">
            <select name="brand" className="w-[300px] h-12 pl-3 text-lg">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            </label>
          </div>

        </div>
        {/* form price and test row  */}
        <div className=" md:flex gap-20">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type </span>
            </label>
            <label className="input-group">

              <input type="text" name="type" placeholder="Type" className="w-full input input-bordered" required />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">

              <input type="number" name="price" placeholder="Product Price" className="w-full input input-bordered" required />
            </label>
          </div>

        </div>
        <div className=" ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sd" placeholder="Describe your product in short" className="w-full input input-bordered" />
                        </label>
                    </div>
                    
        </div>
        <div className=" md:flex gap-20">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating </span>
            </label>
            <label className="input-group">

              <input type="number" name="rating" placeholder="Rating" className="w-full input input-bordered" required />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">

              <input type="text" name="image" placeholder="Image URL" className="w-full input input-bordered" />
            </label>
          </div>

        </div>






        <input type="submit" value="Add Product"
          className="btn btn-ghost bg-orange-300 text-yellow-950 font-bold mt-5" />
      </form>
    </div>
  );
};

export default AddProduct;