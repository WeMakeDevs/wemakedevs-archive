import styles from './index.module.css';

import Cards from './cards.jsx';
import RightArrow from '../../../assets/arrows/right-arrow.png';
import RightSingleArrow from '../../../assets/arrows/right-single-arrow.png';
import AboutImage from '../../../assets/home/aboutus.png';

const About = () => {
  return (
    <section id='about' className={styles['about-container-main']}>
      <div className={styles['about-container']}>
        <img className={styles['banner']} src={AboutImage} alt='About us' />
        <div className={styles['info-container']}>
          <h1>ABOUT US</h1>
          <hr className={styles['about-border']}></hr>
          <ul>
            <li>
              <img src={RightSingleArrow} alt='single-arrow' />
              <p>
                We believe that everyone, irrespective of their college or
                branch, technical or non-technical background can make it big.{' '}
                <span className={styles['highlight']}>
                  {' '}
                  WeMakeDevs is an initiative built on this thought.{' '}
                </span>
              </p>
            </li>
            <li>
              <img src={RightSingleArrow} alt='single-arrow' />
              <p>
                We provide{' '}
                <span className={styles['highlight']}>
                  hands-on training, mentorship for FREE
                </span>{' '}
                and have an{' '}
                <span className={styles['highlight']}>
                  inclusive community.
                </span>
              </p>
            </li>
            <li>
              <img src={RightSingleArrow} alt='single-arrow' />
              <p>
                Get{' '}
                <span className={styles['highlight']}>
                  expert guidance with career
                </span>
                , Open Source, and internships, jobs around the world.
              </p>
            </li>
            <li>
              <img src={RightSingleArrow} alt='single-arrow' />
              <p>
                We are also having various{' '}
                <span className={styles['highlight']}>
                  events weekly or monthly.{' '}
                </span>
                Do participate in those events to make your skills enhance.
              </p>
            </li>
          </ul>
          <div className={styles['courses-link']}>
            <button>
              <a
                href='https://discord.gg/wemakedevs'
                className={styles['link-primary']}
                target='_blank'
                rel='noopener noreferrer'
              >
                Join Discord
                <img src={RightArrow} alt='right arrow' />
              </a>
            </button>
          </div>
        </div>
      </div>
      <Cards />
    </section>
  );
};

export default About;
