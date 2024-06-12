import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Modal1 from '../Components/Modal1';
import Modal2 from '../Components/Modal2';
import Modal3 from '../Components/Modal3';
import Modal4 from '../Components/Modal4';
import Modal5 from '../Components/Modal5';
import Modal6 from '../Components/Modal6';
import Modal7 from '../Components/Modal7';
import Modal8 from '../Components/Modal8';
import Modal9 from '../Components/Modal9';

function App() {
  const slides = [
    Modal1,
    Modal2,
    Modal3,
    Modal4,
    Modal5,
    Modal6,
    Modal7,
    Modal8,
    Modal9,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const CurrentModal = slides[currentIndex];

  return (
    <div className='max-w-[1300px] w-full m-auto py-16 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        <CurrentModal />
      </div>
      {/* Left Arrow */}
      <div className='img-bg group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='img-bg group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mt-5 mb-5 ${
              currentIndex === slideIndex ? 'text-white' : 'text-black'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
