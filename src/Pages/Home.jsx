import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import NewPlants from '../Components/NewPlants';

const Home = () => {
    const plantsData = useLoaderData()
    console.log(plantsData);
    return (
        <div>
            <Banner></Banner>

                  <div className="max-w-7xl mx-auto px-4 md:px-8 my-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🌿 New Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {plantsData.map((plant) => <NewPlants key={plant._id} plant={plant}></NewPlants>)}
        </div>

        </div>


        </div>
    );
};

export default Home;