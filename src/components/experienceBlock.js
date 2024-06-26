export function experienceBlock(item) {
  return (
    <div key={item.id} className='experience-block'>
      <div className='work-date'>
        <p>{item.title}</p>
        <p>
          {item.job} <span>{item.year}</span>
        </p>
      </div>
      <div className='work-text'>
        <p>{item.text}</p>
        <ul>
          {item.techStack.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
