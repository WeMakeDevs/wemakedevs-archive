import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/mentorship.png';

const Mentorship = ({ background = 'static' }) => {
  return (
    <ColumnSection
      src={BannerImage}
      title='Mentorship'
      background={background}
      buttonLinks={[
        {
          href: 'https://github.com/WeMakeDevs/roadmaps',
          name: 'Learn more',
        },
      ]}
      id='mentorship'
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
