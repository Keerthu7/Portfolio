import React from 'react';
import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className='navbar' >
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='miniProject ' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
      </div>
      
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuBtn"
      >
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
      </Link>

      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='miniProject ' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
