import clsx from 'clsx';

import styles from './index.module.css';

import ButtonLink from '../../links/ButtonLink';
import blog1 from '../../../assets/blogs/blog1.png';
import blog2 from '../../../assets/blogs/blog2.png';
import blog3 from '../../../assets/blogs/blog3.png';

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
            <BlogCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

const BlogCard = ({ src, title, discription, href }) => {
  return (
    <div className={styles.card}>
      <img alt='blog' className={styles.img} src={src} />
      <div className={styles.data}>
        <h2 className='h3'>{title}</h2>
        <p>{discription}</p>
        <ButtonLink href={href}>Read More</ButtonLink>
      </div>
    </div>
  );
};

const data = [
  {
    title: 'KubeLetter',
    src: blog1,
    discription:
      'We invite you to check out our kubeletters, where we provide updates and insights on all about cloud native.',
    href: 'https://blog.wemakedevs.org/series/kubeletter',
  },
  {
    title: 'Case Study',
    src: blog2,
    discription:
      'Our case studies feature real-world use cases and the influence of various technologies on enterprises.',
    href: 'https://blog.wemakedevs.org/series/case-studies',
  },
  {
    src: blog3,
    title: 'Tutorials',
    discription:
      "Here, you'll find a variety of in-depth guides and resources to help you learn new skills and technologies.",
    href: 'https://blog.wemakedevs.org',
  },
];
