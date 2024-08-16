import React from 'react';
import classes from './Education.module.css';
import 'animate.css/animate.min.css';
import { FaSchool } from 'react-icons/fa';
import { MdSchool} from 'react-icons/md';

const Education = () => {

    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Bachelor of Technology (Computer Science and Engineering) <span>2018-2022</span>
                      </h2>
                      <p>
                      Sanskriti University, Mathura, Uttar Pradesh
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Intermediate (PCM) <span>2016-2018</span>
                      </h2>
                      <p>
                      JLSM DAV College Bhaga, Dhanbad, Jharkhand.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Matriculation <span>2016</span>
                      </h2>
                      <p>
                      Royal High School Jorapokhar Jharia, Dhanbad, Jharkhand.
                      </p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }


export default Education;
