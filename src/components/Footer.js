import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-content'>
        <div className='name-blurb'>
          <h2>SaVance Ford</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className='socials'>
          <p>Social</p>
          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>
          © Copyright 2024 . Made by <Link to='/'>SaVance Ford</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
