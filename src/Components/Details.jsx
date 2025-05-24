import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const detailsData = useLoaderData()
    console.log(detailsData);
    

    return (
        <div>

<div className="card w-[700px] h-[400px] place-self-center card-side bg-base-100 shadow-sm flex items-center">
  <figure>
    <img 
    className="rounded-xl h-64 w-full object-cover"
      src={detailsData.photo}
      alt={detailsData} />
  </figure>

        <div>
            <h1 className='text-2xl'>{detailsData.name}</h1>
        </div>
</div>

        </div>
    );
};

export default Details;