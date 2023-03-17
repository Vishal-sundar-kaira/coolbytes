import React, { useState } from 'react';
import './Slider.css';
import food1 from './food1.jpg'
import food2 from './items1.webp'
import food4 from './strawberry.webp'
import food3 from './food3.webp'
import item2 from './item2.jpg'
import Navbar from './Navbar';
import Text from './Text'
import Alert from './Alert'
const Slider = ({ }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  setTimeout(() => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, 3000);
  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  let images=[item2,food2,food1]
  return (
    <>
    <div className="relative h-screen ">
      <div className="relative flex-col">
        <Navbar op="50"/>
        <Alert alert={alert}/>
        <Text/>
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            className={`absolute -z-10 object-cover transition duration-500 ease-in-out w-full h-screen  top-0 left-0 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        className="absolute left-10 top-80 -ml-10 -mt-10 p-3  rounded-full bg-black text-white text-2xl font-medium hover:bg-white hover:text-black"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-10 top-80 -mr-10 -mt-10 p-3 rounded-full bg-black text-white text-2xl font-medium hover:bg-white hover:text-black"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
    <div class="container mt-10 text-center">
  <div class="row ">
    <div class="col">
    <img src={food4} class="rounded float-start" alt="..."/>
    </div>
    <div class="col">
      <div className="container text-[25px] font-bold pt-[30px]">
        <h1 className='text-[28px] my-4'>About us</h1>
        <p>"Throwing away food is like steeling from the table of those who are poor and hungry".~Pope francis.Our aim is to bring balance in our local community using existing discarded waste to creat clean and healthy environment</p>
      </div>
    </div>
    <div class="col">
    <img src={food3} class="rounded float-end" alt="..."/>
    </div>
  </div>
</div>
    </>
  );
};

export default Slider;
