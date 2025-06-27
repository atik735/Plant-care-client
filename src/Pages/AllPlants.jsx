import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
  const [search,setSearch] =useState("")
  const [sortedData,setSortedData] = useState([]);
    const allplants = useLoaderData()
    // console.log(allplants);
    
    useEffect(() =>{
  fetch(`https://plant-care-server-three.vercel.app/plants?searchParams=${search}`)
    .then(res => res.json())
    .then(data => setSortedData(data));
},
[search]);

// console.log(sort)


    return (
        <div className='my-5'>

          <h2 className='text-center text-2xl text-green-600 font-bold'>All Plants</h2>
        <div className="space-y-1 text-sm flex justify-end mr-30">
          <select
            name="category"
            className=" px-4 py-3 rounded-md border-gray-300 border bg-gray-50 text-gray-800 focus:border-green-500"
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="nextWatering">NextWatering</option>
            <option value="careLevel">Care Level</option>
          </select>
        </div>
<div className="overflow-x-auto overflow-scroll md:overflow-auto md:w-10/12 mx-auto">
  <table className="table min-w-full text-xs">
    <thead>
      <tr className='text-green-600 bg-green-100 border-b-green-400'>
        <th>Plant Name</th>
        <th>Next Watering</th>
        <th>Category</th>
        <th>Watering Frequency</th>
        <th>See Details</th>
      </tr>
    </thead>

        {sortedData.map(plants =>    
     <tbody key={plants._id}>
      <tr className='border-b border-opacity-20 text-gray-900 border-gray-300 bg-gray-50'>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={plants.photo}
                  alt="Plants" />
              </div>
            </div>
            <div>
              <div className="font-bold">{plants.name}</div>
              <div className="text-sm opacity-50">{plants.healthStatus}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{plants.nextWatering}</p>
        </td>
        <td>
          <p>{plants.category}</p>
        </td>
        <td className='max-sm:text-center'>{plants.wateringFrequency}</td>
        <th>
          <Link 
          to={`/details/${plants._id}`}
          className="text-white  bg-green-600 hover:bg-green-700 p-2 rounded max-md:block text-center max-md:whitespace-nowrap"
          ><button className='cursor-pointer'>View Details</button></Link>
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