import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, chef, price, photo } = coffee;
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name : {name}</h2>
    <p>Chef : {chef}</p>
    <p>Price : {price}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
    );
};

export default CoffeeDetails;