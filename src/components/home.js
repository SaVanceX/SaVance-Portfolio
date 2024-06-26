import { Contact } from './contact';

export function Home() {
  return (
    <>
      <section className='hero'>
        <h1>Hello Im SaVance!</h1>
        <p>I love to leaarn, Code and create Digital Art!</p>
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
              <p>Get to know me!</p>
              <p>
                Experienced Front-End Developer with over 5 years of expertise
                in delivering innovative web solutions for various
                organizations. Proficient in developing, designing, and testing
                diverse web-based applications using multiple technologies. I
                aim to leverage my extensive background and strong technical and
                communication skills to excel in a Front-End Developer role
              </p>
            </div>
            <div>
              <p>My Skills</p>
              <div>
                <span>skill 1</span>
                <span>skill 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
