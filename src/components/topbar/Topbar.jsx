import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#experience', '#portfolio', '#contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const activeSection = sections.find((section) => {
        const target = document.querySelector(section);
        if (target) {
          const offsetTop = target.offsetTop;
          const offsetBottom = offsetTop + target.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (activeSection) {
        setActiveNav(activeSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    // Scroll to the clicked section
    const target = document.querySelector(navItem);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav>
      <a href="#home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Topbar;
