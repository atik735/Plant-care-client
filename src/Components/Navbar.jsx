import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import logo from "../assets/logo.png"
import { Tooltip as ReactTooltip } from "react-tooltip";


const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
const handleToggle = () => {
  setTheme(prev => (prev === "light" ? "dark" : "light"));
};

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);

      const {user,signOutUser} = useContext(AuthContext)
  // console.log(user);
  
    const handleSignOut =() =>{
      signOutUser()
      .then(() =>{
        console.log("signout succesfull");
              Swal.fire({
          title: "Sign Out Successfull!",
          icon: "success",
          draggable: true,
            timer: 1500
        });

      })
      .catch(error =>{
        console.log(error);
      })
    }
  


    	const links = <>
	<li><NavLink to='/' className={({ isActive }) =>
          isActive
            ? "text-white bg-green-600 hover:bg-green-700 font-bold"
            : "text-gray-500 font-medium"
        }
>Home</NavLink></li>
	<li><NavLink to='/allplants' className={({ isActive }) =>
          isActive
            ? "text-white bg-green-600 hover:bg-green-700 font-bold"
            : "text-gray-500 font-medium"
        }
>All Plants</NavLink></li>
	<li><NavLink to='/aboutUs' className={({ isActive }) =>
          isActive
            ? "text-white bg-green-600 hover:bg-green-700 font-bold"
            : "text-gray-500 font-medium"
        }
>About Us</NavLink></li>
	<li><NavLink to='/contactUs' className={({ isActive }) =>
          isActive
            ? "text-white bg-green-600 hover:bg-green-700 font-bold"
            : "text-gray-500 font-medium"
        }
>Contact Us</NavLink></li>
	<li><NavLink to='/terms' className={({ isActive }) =>
          isActive
            ? "text-white bg-green-600 hover:bg-green-700 font-bold"
            : "text-gray-500 font-medium"
        }
>Terms & Condition</NavLink></li>

{user && <>
  
    <li><NavLink to='/dashboard' className={({ isActive }) =>
            isActive
              ? "text-white bg-green-600 hover:bg-green-700 font-bold"
              : "text-gray-500 font-medium"
          }
  >Dashboard</NavLink></li>


</>
}
</>

    return (

        <div className="navbar sticky top-0 mt-2 z-50  bg-green-50 md:px-16 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <Link to='/' className='flex items-center'>
    <img className='w-10 max-md:w-8 max-sm:w-8' src={logo} alt="" />
    <h3 className='font-bold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-green-600 to-lime-300 max-md:text-base'>PlantCare</h3> 

</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">

  {user ? (
  <>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="avatar cursor-pointer">
        <div data-tooltip-id="my-tooltip-2" className="w-10 h-10 rounded-full overflow-hidden">
          <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow z-50"
      >
        <li>
          <h4>{user.displayName}</h4>
        </li>
        <li>
          <h4>{user.email}</h4>
        </li>
      </ul>
    </div>
          <ReactTooltip
        id="my-tooltip-2"
        place="left"
        variant="info"
        content={user.displayName}
      />
  </>
) : (
  <div className="space-x-3">
    <Link to="/login" className="btn text-white bg-green-600 hover:bg-green-700">
      Login
    </Link>
    <Link to="/register" className="btn text-white bg-green-600 hover:bg-green-700">
      Register
    </Link>
  </div>
)}
    {user && <div>
<button onClick={handleSignOut} className="btn btn-sm w-full text-white bg-green-600 hover:bg-green-700">
            Sign Out
          </button></div>}
          
<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
<input
  type="checkbox"
  onChange={handleToggle}
/>

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
</div>
</div>
    );
};

export default Navbar;