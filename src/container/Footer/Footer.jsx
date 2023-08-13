import React from 'react';
import {FooterOverlay, Newsletter} from '../../components';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <p className='p__cormorant'>Contact Us</p>
        <p className='p__opensans' style={{color:"#AAA"}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans' style={{color:"#AAA"}}>+1 212-344-1230</p>
        <p className='p__opensans' style={{color:"#AAA"}}>+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: "15px" }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <p className='p__cormorant'>Working Hours</p>
        <p className='p__opensans' style={{color:"#AAA"}}>Monday-Friday:</p>
        <p className='p__opensans' style={{color:"#AAA"}}>08:00 am -12:00 am</p>
        <p className='p__opensans' style={{color:"#AAA"}}>Saturday-Sunday:</p>
        <p className='p__opensans' style={{color:"#AAA"}}>07:00am -11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans app__footer-headtext' style={{color:"#AAA"}}>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
