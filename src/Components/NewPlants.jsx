import React from 'react';
import { use } from 'react';
import { Link} from 'react-router';

const NewPlants = ({plant}) => {

    console.log(plant);

    return (
            <div key={plant._id} className="card bg-base-100 shadow-md">
              <figure className="px-6 pt-6">
                <img
                  src={plant.photo}
                  alt={plant.name}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{plant.name}</h2>
                <p className="text-sm text-gray-500"><span className=' text-gray-700 font-medium'>Category : </span>{plant.category}</p>
                <p className="text-sm text-gray-500"><span className='text-gray-700 font-medium'>Watering Frequency : </span>{plant.wateringFrequency}</p>
                <div className="card-actions mt-4">
                  <Link to={`/plants/${plant._id}`}>
                    <button className="btn bg-green-600 text-white">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default NewPlants;