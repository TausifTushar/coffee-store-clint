import React from "react";
import Swal from 'sweetalert2'

const AddNewCoffee = () => {
const handelAddCoffee=(e)=>{
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    
  const newCoffee = {
    name, chef, supplier, taste, category, details, photo
  }

  console.log(newCoffee);

  fetch('http://localhost:5000/coffee', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'

    },
    body: JSON.stringify(newCoffee)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)

    if(data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'Coffee Added Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
    
  })
}

  return (
    <>
      <div>
        <div className=" h-[600px] bg-[#F4F3F0] ">
            <p className="text-black flex justify-center text-3xl font-mono font-extrabold">Add New Coffee</p>
               <div className="flex justify-center">
            <p className=" w-[800px] ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handelAddCoffee}>
                <div className="flex justify-center mb-8">
                  <div className="w-1/2">
                  <h1 className=" text-lg font-bold font-serif">Name</h1>
                  <input type="text" placeholder="Type here" name="name" className="input input-bordered w-full max-w-xs" />
                  </div>
                  <div  className="w-1/2">
                  <h1 className=" text-lg font-bold font-serif">Chef</h1>
                  <input type="text" placeholder="Type here" name="chef" className="input input-bordered w-full max-w-xs" />
                  </div>
                </div>
                <div className="flex justify-around mb-8">
                  <div className="  md:w-1/2">
                  <h1 className=" text-lg font-bold font-serif">Supplier</h1>
                  <input type="text" placeholder="Type here" name="supplier" className="input input-bordered w-full max-w-xs" />
                  </div>
                  <div  className="w-1/2">
                  <h1 className=" text-lg font-bold font-serif">Taste</h1>
                  <input type="text" placeholder="Type here" name="taste" className="input input-bordered w-full max-w-xs" />
                  </div>
                </div>
                <div className="flex justify-around mb-8">
                  <div  className="w-1/2">
                  <h1 className=" text-lg font-bold font-serif">Category</h1>
                  <input type="text" placeholder="Type here" name="category" className="input input-bordered w-full max-w-xs" />
                  </div>
                  <div  className="w-1/2">
                  <h1 className=" text-lg font-bold font-serif">Details</h1>
                  <input type="text" placeholder="Type here" name="details" className="input input-bordered w-full max-w-xs" />
                  </div>
                </div>
                <p className=" text-lg font-bold font-serif">Photo</p>
                <input type="text" placeholder="Type here" name="photo" className="mb-4 input input-bordered w-full max-w-xs" />
                <button className="text-lg font-bold font-serif btn bg-orange-500 btn-block">Add Coffee</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default AddNewCoffee;
