import BannerImage from 'assets/home/courses.png';

import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

import { Testimonials, Work } from '..';

const Courses = ({ background = 'static' }) => {
  return (
    <section>
      <ColumnSection
        id='courses'
        src={BannerImage}
        title='Courses'
        direction='right'
        buttonLinks={[
          {
            name: 'Explore courses',
            href: '/courses',
          },
        ]}
        background={background}
      >
        <ListItem>
          All courses are FREE while never compromising on quality.
        </ListItem>
        <ListItem>
          We cover every topic in detail with a hands-on approach and mentor you
          to stand out to get opportunities by breaking all the barriers.
        </ListItem>
        <ListItem>
          Explore a wide range of courses including Data Structures &
          Algorithms, Web Development, DevOps, Machine Learning, and more!
        </ListItem>
        <li style={{ listStyle: 'none', fontWeight: 'bold' }} className='h1'>
          $0/month
        </li>
      </ColumnSection>
      <Work />
      <Testimonials />
    </section>
  );
};

export default Courses;
