import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
        const plantsData = useLoaderData()
    console.log(plantsData);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;