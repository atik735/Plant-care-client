import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const AddPlant = () => {
    const {user} = useContext(AuthContext)
    
    const handleAddPlant =(e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plantData = Object.fromEntries(formData.entries())
        console.log(plantData)

        //send plantdata to the db
        fetch("http://localhost:3000/plants",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(plantData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
            console.log("after adding plant to db",data) 
            Swal.fire({
  title: "Plant Added Successfull!",
  icon: "success",
  draggable: true,
    timer: 1500

});  
// form.reset()
            }        
        })
    }

    return (
<div className="flex justify-center items-center mt-5 mb-5 w-full">
  <div className="w-full p-8 space-y-6 rounded-xl bg-green-100 text-gray-800 shadow-lg">
    <h1 className="text-2xl font-bold text-center">Add Plant Details</h1>
    <form className="space-y-6" onSubmit={handleAddPlant}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image URL */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Image URL</label>
          <input
            type="text"
            name="photo"
            placeholder="https://example.com/plant.jpg"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* Plant Name */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Plant Name</label>
          <input
            type="text"
            name="name"
            placeholder="Plant Name"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* Category Dropdown */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Category</label>
          <select
            name="category"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          >
            <option value="">Select Category</option>
            <option value="succulent">Succulent</option>
            <option value="fern">Fern</option>
            <option value="fooliage">Foliage</option>
            <option value="flowering">Flowering</option>
          </select>
        </div>

        {/* Care Level Dropdown */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Care Level</label>
          <select
            name="careLevel"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          >
            <option value="">Select Care Level</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>

        {/* Watering Frequency */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Watering Frequency</label>
          <input
            type="text"
            name="wateringFrequency"
            placeholder="e.g., every 3 days"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* Health Status */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            placeholder="e.g., Healthy"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* Last Watered Date */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Last Watered Date</label>
          <input
            type="date"
            name="lastWatered"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* Next Watering Date */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Next Watering Date</label>
          <input
            type="date"
            name="nextWatering"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2 space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Enter a short description..."
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          ></textarea>
        </div>

        {/* User Email */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">User Email</label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user.email}
            readOnly
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>

        {/* User Name */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600 font-semibold">User Name</label>
          <input
            type="text"
            name="userName"
            defaultValue={user.displayName}
            readOnly
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="block w-full p-3 text-center rounded-xl text-white bg-green-600 hover:bg-green-700 font-semibold"
      >
        Add Plant
      </button>
      
    </form>
  </div>
</div>

    );
};

export default AddPlant;