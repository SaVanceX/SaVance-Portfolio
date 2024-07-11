import { workdData } from '../work-data';
import { experienceBlock } from './experienceBlock';

export function Experience() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries
      .filter((e) => {
        console.log(e);
        return e.isIntersecting;
      })
      .forEach((entry) => {
        entry.target.classList.add('scrolled');
        observer.unobserve(entry.target);
      });
  });

  document.querySelectorAll('.experience-block').forEach((e) => {
    observer.observe(e);
  });

  console.log(workdData);
  return (
    <>
      <section id='experience'>
        <h1>Experience</h1>
        {workdData.map((item) => experienceBlock(item))}
      </section>
    </>
  );
}
