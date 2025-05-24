import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlantsForm = ({plants,ePlants,setEplants}) => {

        const handleDelete = (_id) =>{
            Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        
    //start deleteing the coffee
    fetch(`https://plant-care-server-three.vercel.app/plants/${_id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
            console.log("Delete response:", data);

        if (data.deletedCount) {
            const newPlants = ePlants.filter(plant => plant._id !== _id)
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success"
            });
            
            setEplants(newPlants)
        }
        
    })
}
    });
        }
    

    return (
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
          to={`/updatePlants/${plants._id}`}
          className="text-white bg-green-600 mr-2 hover:bg-green-700 p-2 rounded max-md:block text-center max-md:whitespace-nowrap"
          ><button>Update</button></Link>
          <button className="text-white bg-green-600 hover:bg-green-700 p-2 rounded max-md:block text-center max-md:whitespace-nowrap"
          onClick={() => handleDelete(plants._id)}>Delete</button>
        </th>
      </tr>
    </tbody> 
    );
};

export default MyPlantsForm;