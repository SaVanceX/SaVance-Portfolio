import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div>
        <div>
          <img src='' alt='' />
        </div>
        <p>SaVance Ford</p>
      </div>
      <ul className='desktop-nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
      </ul>
      <div className='hamburger-container'>
        <div
          className={isMenuOpen ? 'rotated-menu' : 'hamburger-menu'}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={isMenuOpen ? 'mobile-list' : 'mobile-list-state-1'}>
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
