import { Contact } from './contact';
import { Skill } from './skill';
export function Home() {
  return (
    <>
      <section className='hero'>
        <div className='hero-content'>
          <h1>Hello Im SaVance!</h1>
          <p>I love to learn, Code and create Digital Art!</p>
        </div>
      </section>

      <section id='about'>
        <div className='about-container'>
          <div className='blurb'>
            <h2>ABOUT ME</h2>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className='about-content'>
            <div className='about-text'>
              <h3>Get to know me!</h3>
              <p>
                Experienced Front-End Developer with over 5 years of expertise
                in delivering innovative web solutions for various
                organizations. Proficient in developing, designing, and testing
                diverse web-based applications using multiple technologies. I
                aim to leverage my extensive background and strong technical and
                communication skills to excel in a Front-End Developer role
              </p>
            </div>
            <div className='skills-content'>
              <h3>My Skills</h3>
              <div className='skill-grid'>
                <Skill skill={'HTML'} />
                <Skill skill={'CSS'} />
                <Skill skill={'JavaScript'} />
                <Skill skill={'GIT'} />
                <Skill skill={'ReactJS'} />
                <Skill skill={'CMS'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
