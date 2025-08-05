import React from 'react';
import logo from '../assets/logo.png'; // Using your provided logo import path
import pen from '../assets/pen.png'; 
import heart2 from '../assets/heart2.png';
import profile from '../assets/profile.png'; 


import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Wrap logo and app name in a Link component */}
     

     
      <Link to="/">
        <div className="flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105">
          <img src={logo} alt="Every Recipe Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-green-700">Every_Recipe</h1>
        </div>
      </Link>

      
      <nav className="flex items-center space-x-4">
        <Link to="/my-recipes" className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 shadow-sm hover:shadow-md hover:shadow-green-300 transition-shadow duration-200 hover:scale-105" >
          <span className="text-lg"><img src={pen} alt="pen logo" className="h-6" /></span>
          <span className = "font-bold">Add my recipe</span>
        </Link>

        <Link to="/saved-recipes" className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 shadow-sm hover:shadow-md hover:shadow-green-300 transition-shadow duration-200 hover:scale-105">
          <span className="text-lg"><img src={heart2} alt="heart logo" className="h-6" /></span>
          <span className='font-bold'>Saved Collection</span>
        </Link>

        <button className="rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-sm hover:shadow-md hover:shadow-grey-100 transition-shadow duration-200">
          <img src={profile} alt="profile logo" className="h-10" />
        </button>
      </nav>
    </header>
  );
}

export default Header;