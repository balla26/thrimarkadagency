import React from 'react'
// import funfact_bg from "../images/funfact_bg.png"
import './About.css'

const About = () => {
    return (
        <div id="about" className='text-white md:-mt-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50
     flex flex-col md:flex-row justify-between md:items-center gap-12 relative'>
            <div className=' funfact  bg-center h-full w-full abosulte top-0 left-0 opacity-75'></div>

            <div className='md:w-2/5'>
                <h2 className='text-5xl font-bold mb-5'>About Us</h2>
                <p className='text-gray-300'>At our agency, we're more than just your typical ad agency. We're a fusion of traditional and digital expertise, where creativity knows no bounds. Our mission is to empower businesses and organizations by offering a comprehensive suite of services that includes advertising, media, marketing communications, public relations (PR), and event organization. We're here to help you raise awareness, sell products and services, and craft dynamic brands.

                </p>
                {/* <p>Welcome to the world of unlimited possibilities. Welcome to our agency.</p> */}

            </div>



            <div className='md:w-3/5'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>

                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>26</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Global Countries</p>
                        </div>
                    </div>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>500+</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>88%</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Repeated Business</p>
                        </div>
                    </div>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>26000+</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Hours of Code</p>
                        </div>
                    </div>

                </div>


            </div>
            

        </div>
        
    );
}

export default About
