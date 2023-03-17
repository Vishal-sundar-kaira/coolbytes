import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <nav className={`text-white flex flex-col h-20 bg-black  bg-opacity-${props.op} lg:flex-row sticky `}>
            <div className="title text-center font-sans text-[3vw] font-bold mx-3">
                Souperheros
            </div>
            <div className="flex  w-screen text-center justify-center m-3">
                <ul className="flex space-x-13  text-[1.4vw] lg:justify-end  text-white">
                <Link to="/"><li className="cursor-pointer mx-3 font-sans font-bold hover:text-green-400">Home</li> </Link>
                <Link to="/contact"><li className="cursor-pointer mx-3 font-sans font-bold hover:text-green-400">About us</li> </Link>
                    <Link to="/contact"><li className="cursor-pointer mx-3 font-sans font-bold hover:text-green-400">contact us</li> </Link>
                    <Link to="/login"><li className="cursor-pointer absolute right-20 font-sans font-bold hover:text-green-400">Login</li></Link> 
                    <Link to="/signup"><li className="cursor-pointer absolute right-2 font-sans font-bold hover:text-green-400">Signup</li></Link>
            
                </ul>
            </div>
        </nav>
  );
}

export default Navbar
