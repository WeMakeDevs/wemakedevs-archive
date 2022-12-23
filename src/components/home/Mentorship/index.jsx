import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/courses.png';

const Mentorship = () => {
  return (
    <ColumnSection
      imgSrc={BannerImage}
      title='Mentorship'
      buttonLinks={[
        {
          href: 'https://github.com/WeMakeDevs/roadmaps',
          name: 'Learn More',
        },
      ]}
      id='mentorship'
      direction='right'
    >
      <ListItem>
        <span className='highlight higlight-white'>
          A comprehensive answer to all of your mentoring needs
        </span>
        , including educational materials, communities to join, opportunities,
        and much more.
      </ListItem>
      <ListItem>
        <span className='highlight higlight-white'>
          Roadmaps to help you stay on track
        </span>
        , including those for open-source, full-stack, devrel, and more.
      </ListItem>
    </ColumnSection>
  );
};

export default Mentorship;
