import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const  { _id, name, chef, price, photo, details, test, supplier } = useLoaderData();
   

    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form= e.target
        const formData = new FormData(form)
        const updatedCoffeeData = Object.fromEntries(formData.entries())
        console.log(updatedCoffeeData);

        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(updatedCoffeeData)
        })
          .then(res => res.json())
          .then(data => {
            console.log("data after update", data);
            if (data.modifiedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated coffee has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }
            
          })
        
    }

    return (
        <div className="p-28">
      <div className="p-16 text-center space-y-4">
        <h1 className="text-6xl ">Update Existing Coffee Details</h1>
        <p>
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              className="input w-full"
              placeholder="Enter coffee chef"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="test"
              defaultValue={test}
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="Enter coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full"
              placeholder="Enter coffee details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-5">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Enter Photo URL"
            />
          </fieldset>

        <input className="btn w-full border-2 border-white" type="submit" value="Update Coffee" />
      </form>
    </div>
    );
};

export default UpdateCoffee;