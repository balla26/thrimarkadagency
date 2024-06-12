import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import './Navbar.css';
import logo from '../assets/logotransparence.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // For when scrolling, the navbar will be sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Portfolio', path: 'portfolio' },
    { link: 'Blog', path: 'blog' },
    { link: 'Partners', path: 'partner' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in'
            : 'transition-all duration-300 ease-in'
        }`}
      >
        <div className='flex justify-between items-center text-base gap-8'>
          {/* Logo */}
          <a href="/" className='flex items-center text-white text-3xl font-bold'>
            <img src={logo} alt="Logo" className="logo" />
          </a>

          {/* Navigation Links (for desktop) */}
          <ul className='md:flex space-x-12 hidden navitems'>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className='block text-base text-white uppercase hover:text-orange cursor-pointer'
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Mobile Menu Button (Hamburger) */}
          <div className='md:hidden'>
            <button className='text-white focus:outline-none transition-all duration-300 ease-in' onClick={toggleMenu}>
              {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBarsStaggered className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Nav items for mobile phones (tablet and mobile) */}
        <div
          className={`space-y-4 px-4 mt-14 py-7 bg-dark transition-all duration-300 ease-in ${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className='block text-base text-white uppercase hover:text-orange cursor-pointer'
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
