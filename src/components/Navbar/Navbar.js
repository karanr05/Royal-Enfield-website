import React, {useState} from 'react';

import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube,} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import './NavbarStyle.css';

import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div name='home' className={nav ? 'navbar ' : 'navbar navbar-bg'}>
        <div className={nav ? 'logo dark' : 'logo red'}>
          <h2> Royal Enfield </h2>
          </div>
         <ul className='nav-menu' style={{marginRight: '10rem', color: 'black'}}>
          <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
          <Link to='destinations' smooth={true} duration={500}><li>Models</li></Link>
          <Link to='search' smooth={true} duration={500}><li>Booking</li></Link>
          <Link to='views'  smooth={true} duration={500}><li>Views</li></Link>
          <Link to='gallery'  smooth={true} duration={500}><li>Gallery</li></Link>
        </ul>
       <div className='nav-icons'>
         <BiSearch className='icon' style={({marginRight: '2rem', cursor: 'pointer'})}/>
         <BsPerson className='icon'/>
       </div>
       <div className="hamburger" onClick={handleNav}>
       {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
       </div>

       <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-nav" style={{fontWeight: 800}}>
          <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
          <Link to='destinations' smooth={true} duration={500}><li>Models</li></Link>
          <Link to='search' smooth={true} duration={500}><li>Booking</li></Link>
          <Link to='views'  smooth={true} duration={500}><li>Views</li></Link>
          <Link to='gallery'  smooth={true} duration={500}><li>Gallery</li></Link>
             </ul>
            <div className="mobile-menu-bottom">
                <div className='menu-icons'>
                    <button>Search</button>
                    <button>Accounts</button>
                </div>
                 <div className='social-icons'>
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                    <FaYoutube className="icon" />
                    <FaTelegram className="icon" />
                 </div> 
            </div>
       </div>
    </div>
  )
}

export default Navbar