import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import NewPlants from '../Components/NewPlants';
import PlantCareMistakes from '../Components/PlantCareMistakes';
import FriendlyPlants from '../Components/FriendlyPlants';
import { format } from 'date-fns';

const Home = () => {
    const plantsData = useLoaderData()
      const today = format(new Date(), 'MMMM dd, yyyy');
    console.log(plantsData);
    return (
        <div>
            <Banner></Banner>

     <div className=" mx-auto px-4 py-12 rounded-2xl md:px-8 my-10 bg-green-100">
        <div className='text-center space-y-1 mb-6'>
        <h2 className="text-2xl md:text-3xl font-bold text-green-600">🌿 New Plants</h2>
        <p className='text-gray-600'>Rooted in peace, growing with purpose</p>
                      <p className="text-center">Date : {today}</p>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {plantsData.map((plant) => <NewPlants key={plant._id} plant={plant}></NewPlants>)}
        </div>

        </div>
        <PlantCareMistakes></PlantCareMistakes>

        <FriendlyPlants></FriendlyPlants>


        </div>
    );
};

export default Home;