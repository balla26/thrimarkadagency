import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import NewModal from "../Components/NewModal";
import "./Services.css";
const Services = () => {
    return (
        <div id="services" className='text-white lg:px-24 px-4 mt-20'>
            <div className="text-center pb-14 lg:px-24 px-4" id="services">
                <h4 className='text-gray-200 font-semibold text-2xl'>Our Services</h4>
                <h2 className='text-5xl font-bold leading-snug text-white'>Services we can help you with</h2>



            </div>
            <div className='inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-200 ease-in'>
                <span>See All Services</span>
                <BsArrowRight />
            </div>
            <div>
                <NewModal />
            </div>
        </div>
    )
}
export default Services