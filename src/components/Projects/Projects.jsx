import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
import classes from './Projects.module.css';

import calculator from '../images/calculator.png';
import task from '../images/task-tracker.png';
import connect4 from '../images/connect4.png';
import toDoList from '../images/todo.png';
import github from '../images/github.png';
import weather from '../images/weather-app.png';
import stopWatch from '../images/stop-watch.png';

// Web projects
const webItem = [
  {
    link: 'https://codsoft-tabrez-task-tracker.netlify.app/',
    title: 'Task Tracker',
    techStack: 'vite + react',
    desc: 'The application allows users to manage their to-do tasks, with features like adding, updating, deleting tasks, filtering tasks based on their completion status, and tracking deadlines with a countdown timer.',
    image: task,
    color: '#0FFFFF',
    githubLink: 'https://github.com/tabrez1433/CODSOFT-task-tracker.git'
  },
  {
    link: 'https://byteuprise-tabrez-weather-app.netlify.app/',
    title: 'Weather App',
    techStack: 'html,css,js',
    desc: 'The Weather App is a simple and intuitive application that provides current weather information for any city.',
    image: weather,
    color: '#E5E483',
    githubLink: 'https://github.com/tabrez1433/Weather-App.git'
  },
  {
    link: 'https://byteuprise-tabrez-stopwatch.netlify.app/',
    title: 'Stop Watch',
    techStack: 'html,css,js',
    desc: 'This is a simple stopwatch application built using React JS. The application includes start, stop, and reset functionalities and is responsive across different devices.',
    image: stopWatch,
    color: '#D2E0FB'
  },
  {
    link: 'https://internpe-tabrez-calculator.netlify.app/',
    title: 'Simple Calculator',
    techStack: 'html,css,js',
    desc: 'This is a simple web-based calculator application built using HTML, CSS, and JavaScript.',
    image: calculator,
    color: '#FEA1A1',
    githubLink: 'https://github.com/tabrez1433/Calculator.git'
  },
  {
    link: 'https://internpe-tabrez-connect4.netlify.app/',
    title: 'Course Selling App',
    techStack: 'This is a simple Connect 4 game implementation using HTML, CSS, and JavaScript.',
    desc: 'The game allows two players to take turns placing pieces on a board, and the first player to connect four pieces in a row, column, or diagonal wins.',
    image: connect4,
    color: '#C1A4AA',
    githubLink: 'https://github.com/tabrez1433/Connect4-game.git'
  },
  {
    link: 'https://internpe-tabrez-todo-list.netlify.app/',
    title: 'To-Do List',
    techStack:
      'Tech Stack: A simple to-do list application built with HTML, CSS, and JavaScript.',
    desc: 'This application allows users to add, check/uncheck, and delete tasks.',
    image: toDoList,
    color: '#FFA6C9',
    githubLink: 'https://github.com/tabrez1433/To_Do_List.git'
  },
];


export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
    </div>
  );
}
