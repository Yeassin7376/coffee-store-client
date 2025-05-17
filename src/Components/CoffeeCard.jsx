import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const {_id, name, chef, price, photo } = coffee;

  const handleDelete = (id) =>{
    console.log(id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        console.log(result.isConfirmed);
        
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    
  }

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 items-center">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div className="space-y-2.5">
          <h2 className="">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Price: {price}</p>
        </div>
        <div className="card-actions">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button onClick={()=> handleDelete(_id)} className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
