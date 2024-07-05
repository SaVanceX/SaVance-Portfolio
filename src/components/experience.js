import { workdData } from '../work-data';
import { experienceBlock } from './experienceBlock';

export function Experience() {
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
