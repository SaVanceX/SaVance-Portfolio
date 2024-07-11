import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-content'>
        <div className='name-blurb'>
          <h2>SaVance X</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>
        <div className='socials'>
          <p>Social</p>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/savance-ford/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='footer-icon'
                  src='/images/linkedin.png'
                  alt=''
                />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/SaVanceX'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <img className='footer-icon' src='/images/github.png' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>
          © Copyright 2024 . Made by{' '}
          <Link to='https://savancex.netlify.app/'>SaVance Ford</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
