import BannerImage from 'assets/home/newblogimage.jpg';
import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import ListItem from '@/components/Listitem';

const Content = () => {
  return (
    <section id='content' className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <div>
          <h2 className='h1'>Newsroom</h2>
          <hr className={clsx('styled-hr', styles.headingLine)} />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title='Podcast'
            href='https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr'
            src='https://www.youtube.com/embed/t8w-e7yJgiA'
            isVideo
            btnText='Listen podcast'
          >
            <ListItem as='p'>
              The Open Source Cafe is an initiative to highlight the stories,
              journeys, tips & tricks of some of the amazing community leaders
              and members.
            </ListItem>
            <ListItem as='p'>
              Learn from the expereinces of industry expert, and get mentored
              from folks around the globe.
            </ListItem>
            <ListItem as='p'>
              Grow your skills to the next level by gather tricks and tips from
              folks who have made it.
            </ListItem>
          </Card>
          <Card
            title='Blogs'
            href='https://blog.wemakedevs.org'
            src={BannerImage}
            btnText='Read and learn'
          >
            <ListItem as='p'>
              <span className='highlight'>KubeLetter</span> - We invite you to
              check out our kubeletters, where we provide updates and insights
              on all about cloud native.
            </ListItem>
            <ListItem as='p'>
              <span className='highlight'>Case Studies</span> - Our case studies
              feature real-world use cases and the influence of various
              technologies on enterprises.
            </ListItem>
            <ListItem as='p'>
              <span className='highlight'>Tutorials</span> - Here, you'll find a
              variety of in-depth guides and resources to help you learn new
              skills and technologies.
            </ListItem>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Content;

const Card = ({ src, title, href, btnText, children, isVideo }) => {
  return (
    <div className={styles.card}>
      {isVideo ? (
        <iframe
          src={src}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className={styles.img}
        ></iframe>
      ) : (
        <img alt='blog' className={styles.img} src={src} />
      )}
      <div className={styles.data}>
        <h2 className='h3'>{title}</h2>
        {children}
        <ArrowLink as={ButtonLink} href={href}>
          {btnText}
        </ArrowLink>
      </div>
    </div>
  );
};
