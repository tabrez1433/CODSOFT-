import React from 'react';
import classes from './About.module.css';
import 'animate.css/animate.min.css';

const About = () => {

  return (
    <div className={classes.box} id='abouts'>
      <span className={classes.head}>ABOUT ME</span>
      <h2 className={classes.heading}>Who Am I?</h2>
      <div className={classes.About}>
        <p>
          Hi! My name is <strong>Md Yunus Tabrez</strong>. I am a passionate web developer, proficient in <strong>front-end</strong> and <strong>back-end</strong> technologies.
          Committed to crafting user-friendly applications and staying at the forefront of innovation.
          I am much interested in developing new things which excite me a lot.
        </p>
        <p className={classes.br}>
          I love exploring new technologies and being a practitioner, I like to stay on top of
          latest trends. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
        </p>
      </div>
    </div>
  );

}

export default About;


