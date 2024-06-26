import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <div>
        <div>
          <img src='' alt='' />
        </div>
        <p>SaVance Ford</p>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
      </ul>
    </nav>
  );
}
