import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className='img-name-container'>
        <div className='img-container'>
          <img src='/images/profile.jpeg' alt='' />
        </div>
        <p>SaVance X</p>
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
          className={!isMenuOpen ? ' hamburger-menu' : 'rotated-menu'}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul
        className={
          !isMenuOpen
            ? 'mobile-list mobile-list-state-1'
            : 'mobile-list mobile-list-state-2'
        }
      >
        <li>
          <Link to='/' onClick={() => setMenuOpen(!isMenuOpen)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/experience' onClick={() => setMenuOpen(!isMenuOpen)}>
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
}
