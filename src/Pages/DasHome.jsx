import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import DashboardStats from "./DashboardStats";
import AllPlants from "./AllPlants";

const DasHome = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://plant-care-server-three.vercel.app/plants") 
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error(err));
  }, []);

  const myPlants = plants.filter((plant) => plant.email === user?.email);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome , {user?.displayName}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Plants */}
        <div className="bg-green-100 p-6 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Plants</h2>
          <p className="text-3xl font-bold text-green-600">{plants.length}</p>
        </div>

        {/* My Plants */}
        <div className="bg-green-100 p-6 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">My Plants</h2>
          <p className="text-3xl font-bold text-blue-600">{myPlants.length}</p>
        </div>

        {/* Upcoming Waterings (Dummy Data or filter logic later) */}
        <div className="bg-green-100 p-6 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Upcoming Waterings</h2>
          <p className="text-3xl font-bold text-yellow-500">3</p>
        </div>

        {/* Profile Card */}
        <div className="bg-green-100 p-6 shadow rounded-lg text-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
            alt="User"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      <DashboardStats></DashboardStats>
    </div>
  );
};

export default DasHome;
