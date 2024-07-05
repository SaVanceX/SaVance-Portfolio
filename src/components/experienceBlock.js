export function experienceBlock(item) {
  return (
    <div key={item.id} className='experience-block'>
      <div className='work-date'>
        <p className='title'>{item.title}</p>
        <p className='job'>{item.job}</p>
        <p className='year'>{item.year}</p>
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
