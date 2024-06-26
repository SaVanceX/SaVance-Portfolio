import { workdData } from '../work-data';
import { experienceBlock } from './experienceBlock';

export function Experience() {
  console.log(workdData);
  return (
    <>
      <section id='experience'>
        {workdData.map((item) => experienceBlock(item))}
      </section>
    </>
  );
}
