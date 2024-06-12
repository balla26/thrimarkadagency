import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import './Footer.css'
const Footer = () => {
    return (
        <div id="footer" className='lg:px-24 px-4 text-white mt-20'>
            <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-12'>
                <div className="space-y-4 lg:w-1/4">
                    <a href='/' className="text-white text-3xl font-bold">
                        <span className='text-orange'>Thri</span>Mark</a>
                    <p className='text'>Welcome to Thrimark Ad Agency. Explore your ideas with us, and together, we'll take them to the world</p>

                    <div className='flex gap-5 text-white'>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaLinkedinIn className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaInstagram className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaTwitter className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaFacebookF className='w-5 h-5' /></a>

                    </div></div>
                <div className='space-y-4'>
                    <h3 className='text-xl font-semibold '>Services</h3>
                    <div>
                        <a href="#services" className='block'>UI/UX Design</a>
                        <a href="#services" className='block'>Web Development</a>
                        <a href="#services" className='block'>SEO</a>
                        <a href="#services" className='block'>Google Ads</a>
                        <a href="#services" className='block'>Facebook Ads</a>
                        <a href="#services" className='block'>Social Media Marketing</a>
                        <a href="#services" className='block'>Email Marketing</a>
                        <a href="#services" className='block'>Digital Marketing</a>
                        <a href="#services" className='block'>Sales video</a>

                    </div>

                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl font-semibold '>Contact Us</h3>

                    <div className='space-y-3 text-gray-300'>

                        <p>+91 7032868443</p>
                        <p>thrimark@thrimarkadagency.com</p>
                        <p>530016, VISHAKAPATNAM</p>





                    </div>
                </div>
                <div className='space-y-4 lg:w-96'>
                    <h3 className='text-xl font-semibold'>Subscribe</h3>
                    <div className='space-y-3 text-gray-300'>
                        <div className='relative w-full'>
                            <input type='email' placeholder='example@gmail.com' className='newsletter_input' />
                            <button className='newsletter_btn'>
                                <span>send</span>
                            </button>
                        </div>
                        <p> We will guide you to reach your goals in no time. Please subscribe to our page to stay updated with new innovations.

                        </p>

                    </div>



                </div>



            </div>
            <hr className='border-gray-300 mt-5 mb-5' />
            <div className=' flex flex-col sm:flex-row justify-between pb-3 mt'>

                <p>Copyright @2023 ThriMark | All rights reserved </p>
                <p>Terms of Use | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;