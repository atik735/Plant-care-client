import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);

    return (
        <div className="flex justify-center p-4">
            <div className="card w-full max-w-4xl bg-base-100 shadow-md flex flex-col md:flex-row gap-6 items-center p-4">
                <figure className="w-full md:w-1/2">
                    <img
                        className="rounded-xl w-full h-64 object-cover"
                        src={detailsData.photo}
                        alt={detailsData.name}
                    />
                </figure>

                <div className="space-y-2 w-full md:w-1/2">
                    <h1 className="text-2xl font-bold">{detailsData.name}</h1>
                    <p><span className="font-bold">Category:</span> {detailsData.category}</p>
                    <p><span className="font-bold">Description:</span> {detailsData.description}</p>
                    <p><span className="font-bold">Health:</span> {detailsData.healthStatus}</p>
                    <p><span className="font-bold">Last Watered:</span> {detailsData.lastWatered}</p>
                    <p><span className="font-bold">Next Watering:</span> {detailsData.nextWatering}</p>
                    <p className="text-lg"><span className="font-bold">User Name:</span> {detailsData.userName}</p>
                    <p className="text-lg"><span className="font-bold">User Email:</span> {detailsData.userEmail}</p>
                    <p><span className="font-bold">Watering Frequency:</span> {detailsData.wateringFrequency}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
