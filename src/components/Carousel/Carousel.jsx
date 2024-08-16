import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import carousel2 from '../images/carousel-2.jpg';
import carousel1 from '../images/carousel-1.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={7000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={carousel2} alt='myImage' />
          <div className={classes.h1}>
            I'm Tabrez
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1
              }}
            >
              <a
                href='#'
                rel='opener noreferrer'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </motion.h1>
          </div>
        </div>
        <div>
          <img className={classes.image} src={carousel1} alt='myImage' />
          <div className={classes.h2}>
            <h1> I love building</h1>
            <h1>THINGS!!</h1>
            <a
              href='https://github.com/tabrez1433?tab=repositories'
              rel='opener noreferrer'
              target='_blank'
            >
              VIEW Web PROJECTS <GoProject />
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
