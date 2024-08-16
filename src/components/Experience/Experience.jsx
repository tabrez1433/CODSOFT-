import React from 'react';
import classes from './Experience.module.css';

import 'animate.css/animate.min.css';
import { MdWork } from 'react-icons/md';

const Experience = ()=> {

    return (
      <div className={classes.box} id='experience'>
        <span className={classes.head}>Experience/Internships</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>ReactJS Developer <span>July 2024 - Present</span></h2>
                      <p>Internship at {'CodSoft'}</p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Web Development Intern <span>June 2024 - July 2024</span></h2>
                      <p>Internship at {'InternPe'}</p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      Web Development Intern <span>May 2024 - June 2024</span>
                      </h2>
                      <p>
                      Internship at {'Byte Uprise'}
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


export default Experience;
