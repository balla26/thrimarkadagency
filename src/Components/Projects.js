import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import PortfolioSlider from '../Components/PortfolioSlider'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  return (
    <div id="portfolio">
      <div className="text-center pb-4 lg:px-24 px-4" id="protfolio">
        <h4 className='text-gray-200 font-semibold text-2xl'>Latest Projects</h4>
        <h2 className='text-5xl font-bold leading-snug text-white'>Portfolio to explore</h2>
      </div>
      <div>
      <h1 className='flex items-center py-2 lg:px-10 md:px-10 px-5 lg:mx-10 md:mx-20 mx-2 mb-5 font-bold text-white hover:text-orange transition-all duration-200 ease-in'>
        <span>Scroll to explore more</span>
        <BsArrowRight />
      </h1>
      </div>
      <div className='lg:px:24 px-4 overflow-hidden mb-0'>

        <PortfolioSlider />

      </div>
      <div className='mb-0'></div>

    </div>
  )
}

export default Projects;