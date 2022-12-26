import clsx from 'clsx';

import styles from './index.module.css';

import ButtonLink from '../../links/ButtonLink';
import blog1 from '../../../assets/blogs/blog1.webp';
import blog2 from '../../../assets/blogs/blog2.webp';
import blog3 from '../../../assets/blogs/blog3.webp';

const Blogs = ({ background = 'static' }) => {
  return (
    <section
      id='blogs'
      className={background === 'gradient' ? 'gradient' : 'static-bg'}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Blogs</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.cardWrapper}>
          {data.map((item) => (
            <BlogCard key={item.from} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

const BlogCard = ({ src, description, href, from }) => {
  return (
    <div className={styles.card}>
      <img alt='blog' className={styles.img} src={src} />
      <div className={styles.data}>
        <p className={styles.description}>
          {description.split(' ').splice(0, 40).join(' ')}...
        </p>
        <h2 className={styles.name}>By: {from}</h2>
        <ButtonLink openNewTabIcon={true} href={href}>
          Read More
        </ButtonLink>
      </div>
    </div>
  );
};

const data = [
  {
    title: 'KubeLetter #13',
    src: blog1,
    description:
      "Welcome to the 13th edition of the KubeLetter. We've been going through some changes as you've noticed. Community Classroom and Kubeworld have been merged into one, and are now known as WeMakeDevs. No need to worry, our mission remains the same, and we have some exciting news in the coming days.",
    from: 'Kunal Kushwaha',
    href: 'https://blog.wemakedevs.org/kubeletter-13',
  },
  {
    title: 'UX Design in Open-Source',
    src: blog2,
    description:
      'The globe and the community are benefiting greatly from the fact that open-source development is at its pinnacle right now. As more and more individuals participate in open-source projects, they gain expertise in development and also make the lives of others simpler through their contributions to the projects.',
    from: 'Adarsh Dubey',
    href: 'https://blog.wemakedevs.org/ux-design-in-open-source',
  },
  {
    src: blog3,
    title: 'How to scrape Instagram with Soax Residential Proxy Service',
    description:
      'Hey everyone, Love cats? what if I told you that you can get cat images as many as you want from instagram? Yes in this tutorial, we are going to build a instagram scraper which visits the cats hashtag on instagram (You can add your customized hashtag too) and scrapes all the images and stores it in a list for you. (You can additionally go ahead and append code for downloading them to your local computer memory)',
    from: 'Kaiwalya Koparkar',
    href: 'https://blog.wemakedevs.org/how-to-scrape-instagram-with-soax-residential-proxy-service',
  },
];
