import React from 'react';

const PlantCareMistakes = () => {
    const topPlantCareMistakes = [
  {
    id: 1,
    title: "Overwatering",
    desc: "Too much water can suffocate roots and lead to root rot. Always check soil moisture before watering.",
  },
  {
    id: 2,
    title: "Underwatering",
    desc: "Neglecting to water plants can cause wilting and stunted growth. Ensure consistent hydration.",
  },
  {
    id: 3,
    title: "Improper Lighting",
    desc: "Plants need the right amount of light. Too much or too little can weaken them.",
  },
  {
    id: 4,
    title: "Wrong Soil Choice",
    desc: "Using the wrong soil can hinder plant growth. Choose soil suited to your plant’s needs.",
  },
  {
    id: 5,
    title: "Ignoring Pests",
    desc: "Unchecked pests can damage plants. Regularly inspect leaves and stems for signs of infestation.",
  },
  {
    id: 6,
    title: "Wrong Pot Size",
    desc: "A pot that's too small or too large can stress the plant. Repot when needed to match growth.",
  },
];

    return (
<section className="bg-green-100 py-12 px-4 rounded-2xl my-10 md:px-12">
  <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-8">
    Top Plant Care Mistakes
  </h2>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {topPlantCareMistakes.map(mistake =>     <div key={mistake.id} className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold text-green-700 mb-2">
        {mistake.title}
      </h3>
      <p className="text-gray-600">
        {mistake.desc}
      </p>
    </div>
)}

  </div>
</section>

    );
};

export default PlantCareMistakes;