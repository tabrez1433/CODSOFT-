import React from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

import logo from '../images/profile-pic.jpg';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitterx.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

export default function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  const iconList = [
    {
      component: github,
      href: 'https://github.com/tabrez1433'
    },
    {
      component: linkedin,
      href: 'https://www.linkedin.com/in/md-yunus-tabrez/'
    },
    {
      component: twitter,
      href: 'https://twitter.com/login/'
    },
    {
      component: instagram,
      href: 'https://www.instagram.com/accounts/login/'
    },
    {
      component: gmail,
      href: 'mailto:tabrezkhan0209@gmail.com'
    }
  ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
      <div className='topHashtag'>#eat</div>
      <div className='topHashtag'>#code</div>
      <div className='topHashtag'>#sleep</div>
      <div className='topHashtag'>#repeat</div>
      <h1>
        <Link smooth to='/#start' className='h1_links'>
          Md Yunus Tabrez
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={logo} className='my-img' />
      </motion.div>
      <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
        <a
          href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
          rel='opener noreferrer'
          target='_blank'
          className='fa fa-envelope'
        ></a>
        &nbsp;tabrezkhan0209@gmail.com
      </p>

      <ul className='sidebar-nav'>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#abouts' className='links'>
            About
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#projects' className='links'>
            Projects
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#experience' className='links'>
            Experience
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#certification' className='links'>
          Certification
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            Education
          </Link>
        </li>
      </ul>

      <div>
        <motion.ul className='sidebar-nav' variants={container} initial='hidden' animate='visible'>
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <img
                onClick={() => {
                  window.open(val.href, '_blank');
                }}
                src={val.component}
                className='icon-img'
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        style={{
          color: 'black',
          fontWeight: 'bold',
          paddingTop: '10%'
        }}
        className='tagtop'
      >
        Made with <a href='#' className='fa fa-heart heart'></a> by me.
      </div>
    </div>
  );
}
