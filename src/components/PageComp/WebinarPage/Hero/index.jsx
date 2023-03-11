import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import HeroImg from '@/assets/webinar/hero.gif';
const Hero = () => {
  return (
    <header className={styles.section} id='about'>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading highlight highlight--light'>
          Expert Webinar on the latest technologies
        </h1>
        <p className={styles.tagLine}>
          Expand your knowledge and enhance your skills with our expert-led
          webinars on a wide range of topics.
        </p>
        <ArrowLink className={styles.cta} as={ButtonLink} href='#upcoming'>
          Upcoming webinars
        </ArrowLink>
        <div className={styles.webinarGIfContainer}>
          <img
            src={HeroImg}
            style={{
              width: '100%',
            }}
          />
          <svg
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              rotate: '180deg',
              translate: '50% -50%',
            }}
            viewBox='0 0 107 62'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            ></path>
          </svg>

          <svg
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              rotate: '180deg',
              translate: '-50% -50%',
            }}
            viewBox='0 0 77 76'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M41.7493 32.4404L38.2121 0.59082L34.8886 30.5155L25.5582 9.79984L34.5645 32.3709L7.56837 15.3481L29.112 36.8232L6.82637 31.1326L29.8865 38.1029L0 48.5073L30.3935 45.0337L11.8259 59.0784L31.6529 45.3955L21.2061 75.0989L37.3899 49.2513L36.792 72.5937L38.4707 48.3512L55.2181 75.0989L45.1967 46.605L62.9247 61.501L44.8241 44.8958L76.4242 48.5073L48.1515 38.6647L70.5456 34.1534L46.1617 37.97L68.8558 15.3481L43.5691 31.293L53.9159 11.1442L41.7985 32.4095L41.7493 32.4404Z'
              fill='currentColor'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M41.7493 32.4404L38.2121 0.59082L34.8886 30.5155L25.5582 9.79984L34.5645 32.3709L7.56837 15.3481L29.112 36.8232L6.82637 31.1326L29.8865 38.1029L0 48.5073L30.3935 45.0337L11.8259 59.0784L31.6529 45.3955L21.2061 75.0989L37.3899 49.2513L36.792 72.5937L38.4707 48.3512L55.2181 75.0989L45.1967 46.605L62.9247 61.501L44.8241 44.8958L76.4242 48.5073L48.1515 38.6647L70.5456 34.1534L46.1617 37.97L68.8558 15.3481L43.5691 31.293L53.9159 11.1442L41.7985 32.4095L41.7493 32.4404Z'
              fill='currentColor'
              fillOpacity='0.2'
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};
export default Hero;
