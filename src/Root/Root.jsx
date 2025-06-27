import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from 'react-router';
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
      <main className="min-h-[calc(100vh-116px)]">
        <div className="w-11/12 mx-auto ">
    <Outlet></Outlet>
        </div>
      </main>
        <Footer></Footer>
    </div>
  );
};

export default Root;
