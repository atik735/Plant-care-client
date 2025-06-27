import React from "react";
import { Link } from "react-router";

const AllPlantsCard = ({ plant }) => {
    console.log(plant)
  return (
    <div>
      <div className="card bg-base-100 h-full w-full shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={plant.photo}
            alt={plant.name}
            className="rounded-xl w-96 h-74 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{plant.name}</h2>
          <p>{plant.description}</p>
          <p>Next Watering Date: {plant.nextWatering}</p>
          <p>Care Level: {plant.careLevel}</p>
          <div className="card-actions">
          <Link 
          to={`/details/${plant._id}`}
          className="text-white  bg-green-600 hover:bg-green-700 p-2 rounded max-md:block text-center max-md:whitespace-nowrap"
          ><button className='cursor-pointer'>View Details</button></Link></div>
        </div>
      </div>
    </div>
  );
};

export default AllPlantsCard;