import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllPlantsCard from '../Components/AllPlantsCard';

const AllPlantsCrd = () => {
  const allplants = useLoaderData();
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(allplants || []);

  useEffect(() => {
    if (search === "") {
      setSortedData(allplants);
    } else {
      fetch(`https://plant-care-server-three.vercel.app/plants?searchParams=${search}`)
        .then(res => res.json())
        .then(data => setSortedData(data));
    }
  }, [search, allplants]);
  console.log(sortedData)

  return (
    <div className='my-5 px-4'>
                <h2 className='text-center text-2xl text-green-600 font-bold'>All Plants</h2>
      <div className="flex justify-end mb-4">
        <select
          name="category"
          className="px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          onChange={(e) => setSearch(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="nextWatering">Next Watering</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedData.map((plant) => (
          <AllPlantsCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlantsCrd;
