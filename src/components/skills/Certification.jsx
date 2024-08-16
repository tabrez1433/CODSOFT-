import React from 'react';
import classes from './Certification.module.css';
import 'animate.css/animate.min.css';
import { FaSchool } from 'react-icons/fa';
import { MdSchool} from 'react-icons/md';

const Certification = () => {

    return (
      <div className={classes.box} id='certification'>
        <span className={classes.head}>Certification</span>
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
                      Full Stack Development Training – Internshala <span>Nov 2023 – May 2024</span>
                      </h2>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Back-End Web Development Training – Internshala  <span>Feb 2024 – May 2024</span>
                      </h2>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Front-end Web Development Training – Internshala  <span>Nov 2023 – Jan 2024</span>
                      </h2>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Programming Fundamentals – Programming Hub <span>Mar 2019</span>
                      </h2>
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


export default Certification;
