import React from 'react'
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import items1 from './items1.webp'
import { Link } from 'react-router-dom';
const Items = (props) => {
  return (
    <>
    <div className=" w-full h-10 text-center text-4xl pt-20">
      <h1 className='font-bold'>Need Help For {props.name}</h1>
    </div>
      <div className=" w-screen flex flex-row  h-screen justify-center items-center text-center">
        <div className="className w-[25vw] hover:w-[27vw] hover:h-[52vh] mx-12 h-[50vh]">
        <Link to="/retailer"><img src={food1} className="w-full   h-full" alt="" /></Link><h1 className='font-bold text-[40px]'>Retailer</h1></div>
        <div className="className w-[25vw] mx-12 h-[50vh] hover:w-[27vw] hover:h-[52vh]"><Link to="/events"><img src={items1} className="w-full h-full " alt="" /></Link><h1 className='font-bold text-[40px]'>Events</h1></div>
        <div className="className w-[25vw] mx-12 h-[50vh] hover:w-[27vw] hover:h-[52vh] "><Link to="/homee"><img src={food2} className="w-full h-full " alt="" /></Link><h1 className='font-bold text-[40px]'>Volunteer</h1></div>
    </div>
    </>
  )
}

export default Items
