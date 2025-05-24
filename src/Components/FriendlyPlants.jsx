import React from 'react';

const FriendlyPlants = () => {

    const beginnerFriendlyPlants = [
  {
    id: 1,
    name: "Snake Plant",
    desc: "Thrives in low light and requires minimal watering. Perfect for beginners.",
    image: "https://www.plantstore.ie/cdn/shop/products/snakeplant.png?v=1658233661&width=1100",
  },
  {
    id: 2,
    name: "Spider Plant",
    desc: "Resilient and adaptable, grows well in indirect light with occasional watering.",
    image: "https://i.ibb.co/GQRMxXTX/images.jpg",
  },
  {
    id: 3,
    name: "Pothos",
    desc: "Fast-growing vine that tolerates low light and irregular watering.",
    image: "https://www.plantstore.ie/cdn/shop/products/Scindapsus_ff99fc67-bace-4efc-9e8b-d0811e2e131e.png?v=1636054528&width=1100",
  },
  {
    id: 4,
    name: "Aloe Vera",
    desc: "Low-maintenance succulent that thrives in bright, indirect light.",
    image: "https://i.ibb.co/GfTx3PNQ/aloe-vera1.jpg",
  },
  {
    id: 5,
    name: "Peace Lily",
    desc: "Beautiful and easy to care for, tolerates low light and purifies air.",
    image: "https://www.plantstore.ie/cdn/shop/products/SPATHIPHYLLUM.png?v=1641321814&width=1100",
  },
    {
    id: 6,
    name: "ZZ Plant",
    image: "https://www.plantstore.ie/cdn/shop/products/zzz.png?v=1641318828&width=1100",
    desc: "Tolerates low light and neglect. Perfect for beginners.",
  },
];

    return (
     <div className=" mx-auto px-4 py-12 rounded-2xl md:px-8 my-10 bg-green-100">
        <div className='text-center space-y-1 mb-6'>
        <h2 className="text-2xl md:text-3xl font-bold text-green-600">Beginner-Friendly Plants</h2>
        <p className='text-gray-600 py-2'>Just starting your plant journey? These easy-going green friends are perfect for beginners. <br />
      They thrive with minimal care and bring life to any space. Explore and pick your first favorite!
</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {
  beginnerFriendlyPlants.map(plant => 
            <div key={plant.id} className="card bg-base-100 shadow-md">
              <figure className="px-6 pt-6">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-green-600">{plant.name}</h2>
                <p className="text-sm text-gray-500">{plant.desc}</p>
              </div>
            </div>
  )}
</div>
</div>

    );
};

export default FriendlyPlants;