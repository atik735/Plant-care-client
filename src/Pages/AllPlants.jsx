import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const allplants = useLoaderData()
    console.log(allplants);
    
    return (
        <div>
<div className="overflow-x-auto overflow-scroll md:overflow-auto md:w-10/12 mx-auto">
  <table className="table min-w-full text-xs">
    <thead>
      <tr className='text-green-600 bg-green-100 border-b-green-400'>
        <th>Plant Name</th>
        <th>Category</th>
        <th>Watering Frequency</th>
        <th>Actions</th>
      </tr>
    </thead>

        {allplants.map(plants =>    
     <tbody key={plants._id}>
      <tr className='border-b border-opacity-20 text-gray-900 border-gray-300 bg-gray-50'>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{plants.name}</div>
            </div>
          </div>
        </td>
        <td>
          {plants.category}
        </td>
        <td className='max-sm:text-center'>{plants.wateringFrequency}</td>
        <th>
          <Link 
          to={`/details/${plants._id}`}
          className="text-white bg-green-600 hover:bg-green-700 p-2 rounded max-md:block text-center max-md:whitespace-nowrap"
          ><button>View Details</button></Link>
        </th>
      </tr>
    </tbody> 
)}

  </table>
</div>       
 </div>
    );
};

export default AllPlants;