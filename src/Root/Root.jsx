import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from 'react-router';
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-116px)]">
        <div className="w-11/12 mx-auto mt-5 ">
    <Outlet></Outlet>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
