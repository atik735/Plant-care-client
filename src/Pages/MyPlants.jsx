import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MyPlantsForm from '../Components/MyPlantsForm';

const MyPlants = () => {
    const emailPlants= useLoaderData();
    // console.log(emailPlants);
    
      const [ePlants,setEplants] =useState(emailPlants)
    

    return (
        <div>
<div className="overflow-x-auto overflow-scroll md:overflow-auto md:w-10/12 mx-auto my-5">
          <h2 className='text-center text-2xl text-green-600 font-bold mb-2'>My Plants</h2>
  <table className="table min-w-full text-xs">
    <thead>
      <tr className='text-green-600 bg-green-100 border-b-green-400'>
        <th>Plant Name</th>
        <th>Next Watering</th>
        <th>Category</th>
        <th>Watering Frequency</th>
        <th>Actions</th>
      </tr>
    </thead>

        {ePlants.map(plants =>  <MyPlantsForm key={plants._id} plants={plants} ePlants={ePlants} setEplants={setEplants}></MyPlantsForm>
)}

  </table>
</div>       
 </div>
    );
};

export default MyPlants;