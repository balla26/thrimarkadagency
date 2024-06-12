import React,{ useState } from 'react'
import {BsArrowRight} from 'react-icons/bs';
import Modal10 from '../Components/Modal10';
import "./hero.css"
import ContactForm from './ContactForm';
const Contact = () => {
const [isFormOpen, setIsFormOpen] = useState(false);
const openForm = () => {
setIsFormOpen(true);
};
return (
<div id="contact" className='lg:px-24 px-4'>
<div className='relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl'>
    <div className='cs-shape-1'></div>
    <div className='cs-shape-1'></div>
    <div className='cs-shape-1'></div>
    <div className='h-full flex items-center justify-center'>
        <div className='lg:w-1/2 mx-auto text-center px-4 '>
            <h2 className='lg:text-xl text-xl text-white font-bold lg:leading-snug leading-normal mb-6'>Let's collaborate and make great things happen. <br/>Reach out to us with your inquiries, and we'll provide expert guidance and solutions tailored to your needs.</h2>
            {/* 
            <div className='text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8' >
                */}
                <div>
                    {isFormOpen ? (
                    <ContactForm />
                    ) : (
                    <Modal10 />
                    )}
                </div>
                {/* 
                <a href="" className='inline=flex text-white items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in'>
                    <span>Apply for Meeting</span>
                    <BsArrowRight/>
                </a>
                */}
            </div>
        </div>
    </div>
</div>
)
}
export default Contact