import { Testimonials, Work } from '..';
import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/courses.png';

const Courses = ({ background = 'static' }) => {
  return (
    <section className={background === 'gradient' ? 'gradient' : 'static-bg'}>
      <ColumnSection
        id='courses'
        imgSrc={BannerImage}
        title='Courses'
        direction='right'
        buttonLinks={[
          {
            name: 'Explore courses',
            href: 'https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3',
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
        <h3
          className='h1'
          style={{
            marginTop: '1rem',
          }}
        >
          $0/month
        </h3>
      </ColumnSection>
      <Work />
      <Testimonials />
    </section>
  );
};

export default Courses;
