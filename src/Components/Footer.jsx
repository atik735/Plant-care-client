import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "motion/react";
import { AuthContext } from '../Contexts/AuthContext';


const Footer = () => {

  const {user} = useContext(AuthContext)

      const links = <>
  <li><NavLink to='/' className={({ isActive }) =>
          isActive
            ? " text-green-600 font-bold  "
            : "text-gray-500 font-medium"
        }
>Home</NavLink></li>
  <li><NavLink to='/allplants' className={({ isActive }) =>
          isActive
            ? " text-green-600 font-bold"
            : "text-gray-500 font-medium"
        }
>All Plants</NavLink></li>
  <li><NavLink to='/aboutUs' className={({ isActive }) =>
          isActive
            ? " text-green-600 font-bold  "
            : "text-gray-500 font-medium"
        }
>About Us</NavLink></li>
  <li><NavLink to='/contactUs' className={({ isActive }) =>
          isActive
            ? " text-green-600 font-bold  "
            : "text-gray-500 font-medium"
        }
>Contact Us</NavLink></li>
  <li><NavLink to='/terms' className={({ isActive }) =>
          isActive
            ? " text-green-600 font-bold  "
            : "text-gray-500 font-medium"
        }
>Terms & Condition</NavLink></li>

{user && <>
  
    <li><NavLink to='/dashboard' className={({ isActive }) =>
            isActive
              ? " text-green-600 font-bold  "
              : "text-gray-500 font-medium"
          }
  >Dashboard</NavLink></li>


</>
}
</>
    return (
<footer className="footer footer-horizontal gap-y-0 footer-center bg-green-50 p-10 space-y-2 leading-4 mt-3">
  <aside className='space-y-1'>
  <motion.img 
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className='w-14 h-14' src={logo} alt="" />
    <p className=" ">
      PlantCare.
      </p>
      <p className='text-gray-700 py-2'>
PlantCare is where greenery meets community — helping you grow, share, and <br />connect through every leaf.
    </p>
  </aside>
    <nav>
    <div className="grid grid-flow-col gap-4 ">
      <Link className='hover:text-green-600' to={"https://www.facebook.com/ki.korbi.id.diye"}>
      <CiFacebook size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.instagram.com/atik_h35/"}>
<FaInstagram size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.google.com/"}>
<TiSocialGooglePlus size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.linkedin.com/"}>
<TiSocialLinkedinCircular size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.youtube.com/"}>
<AiOutlineYoutube size={30}/>
      </Link>
    </div>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
    </div>
  </nav>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</footer>
    );
};

export default Footer;