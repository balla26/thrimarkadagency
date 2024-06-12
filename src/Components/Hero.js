import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Import the necessary components
import './hero.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Innovation', 'Expertise', 'Creation'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="banner cs-style1" id="hero">
      <div className="cs-shape-1"></div>
      <div className="cs-shape-1"></div>
      <div className="cs-shape-1"></div>

      <div className="px-4 lg:px-24">
        {/* Uncomment the following block to use react-simple-typewriter */}
        {/* 
        <h1 className='md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-sung leading-sung'>
          Our <span style={{ fontWeight: 'bold', color: 'orange' }}>{text}</span>
          <Cursor />
        </h1>
        */}

        {/* Typing Animation with react-simple-typewriter */}
        <h1 style={{ margin: '50px' }} className='md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-sung leading-sung'>
          Our{' '}
          <span style={{ fontWeight: 'bold', color: '#ff4a17' }}>{text}</span>
          <span style={{ color: 'red' }}>
            <Cursor />
          </span>
        </h1>

        {/* Creativity In Our Blood Line */}
        <div className="text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8">
          <div>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
            >
              <span>Get a Quote</span>
              <BsArrowRight />
            </a>
          </div>
          <div className="md:w-1/2">
            <p className="">
              We deliver the best problem-solving solutions for our clients and
              provide the finest finished products in the present and the
              upcoming future.
            </p>
          </div>
        </div>
      </div>

      <Link to="services" smooth={true} className="cs-down_btn md:mt-20 mt-8">

      </Link>
    </div>
  );
};

export default Hero;
