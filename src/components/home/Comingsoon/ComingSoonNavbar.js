import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../../styles/navbar.css';

import Logo from '../../assets/logo.png';

const ComingSoon = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className='navbar_cont'>
      <div className='navbar_logo'>
        <img src={Logo} alt='logo' />
      </div>
      <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
        <li className='navbar-item'>
          <a
            href='https://twitter.com/commclassroom/'
            target='_blank'
            rel='noreferrer'
          ></a>
        </li>
        <li className='navbar-item'>
          <a
            href='https://www.linkedin.com/company/commclassroom/'
            target='_blank'
            rel='noreferrer'
          ></a>
        </li>
        <li className='navbar-item'>
          <a
            href='https://www.instagram.com/commclassroom/'
            target='_blank'
            rel='noreferrer'
          ></a>
        </li>
      </ul>

      <div className='navbar_hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: 'black' }} />
        ) : (
          <FaBars size={30} style={{ color: 'black' }} />
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
