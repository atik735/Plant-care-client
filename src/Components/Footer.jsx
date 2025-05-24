import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
<footer className="border border-green-200 shadow-md bg-green-100
 text-gray-900 p-6">
        <h2 className='text-2xl font-bold text-center my-2'>Plant Care</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: contact@plantcare.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Room Street, Apt City</p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Terms & Conditions</h3>
          <p className="text-sm text-gray-900">
    Taking care of plants is not just a hobby — it's a way to connect with nature, bring calm into your life, and watch growth happen every day. Whether you're a beginner or a seasoned gardener, My Plants helps you track, nurture, and celebrate your green friends with ease. Let's make every leaf count! 🌿✨
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link to='https://www.facebook.com/ki.korbi.id.diye' target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </Link>
            <Link to='https://www.instagram.com/atik_h35' target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </Link>
            <Link to='https://github.com/atik735' target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-900">
        &copy;🌿{new Date().getFullYear()} My Plants. Nurture Nature, Grow with Love. 🌱
All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;