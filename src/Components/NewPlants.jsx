import React from 'react';
import { Link} from 'react-router';

const NewPlants = ({plant}) => {


    // console.log(plant);

    return (
            <div key={plant._id} className="card bg-green-100 shadow-md">
              <figure className="px-6 pt-6">
                <img
                  src={plant.photo}
                  alt={plant.name}
                  className="rounded-xl h-48 w-full object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-green-600">{plant.name}</h2>
                <div className='flex gap-2'>
                <p className="text-sm text-gray-500"><span className='  font-medium text-green-800'>Category : </span>{plant.category}</p>
                <p className="text-sm text-gray-500"><span className='  font-medium text-green-800'>CareLevel : </span>{plant.careLevel}</p>
                </div>
                <p className="text-sm text-gray-500"><span className='text-green-800 font-medium'>Next Watering : </span>{plant.nextWatering}</p>
                <p className="text-sm text-gray-500"><span className='text-green-800 font-medium'>Watering Frequency : </span>{plant.wateringFrequency}</p>
                <div className="card-actions mt-4">
                  <Link to={`/details/${plant._id}`}>
                    <button className="btn bg-green-600 text-white">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default NewPlants;