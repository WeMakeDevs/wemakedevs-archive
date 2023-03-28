import BannerImage from 'assets/home/courses.png';
import { BsCalendar, BsClock } from 'react-icons/bs';

import Layout, { ColumnSection } from '@/components/layout';
import ListItem from '@/components/Listitem';
import {
  About,
  Register,
  Speakers,
} from '@/components/PageComp/IndividualWebinar';

const IndividualWebinarPage = ({ content }) => {
  return (
    <Layout content={content}>
      <About content={content} />
      <ColumnSection
        id='takeaways'
        src={BannerImage}
        title='Why should you attend?'
        direction='right'
      >
        {content.takeaways.map((takeaway) => (
          <ListItem key={takeaway}>{takeaway}</ListItem>
        ))}
        <ListItem>
          Win exciting gifts and prizes while learning new technology.
        </ListItem>
      </ColumnSection>
      <section id='time'>
        <div
          className='layout'
          style={{
            paddingBlock: '6rem',
          }}
        >
          <h2 className='h1'>Time & Date</h2>
          <hr
            className='styled-hr'
            style={{
              marginBlock: '1.5rem',
            }}
          />
          <div
            className='h2'
            style={{
              display: 'flex',
              justifyContent: 'cetner',
              gap: '1rem',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'cetner',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: 'row',
              }}
            >
              <BsCalendar /> {new Date(content.time).toDateString()}
            </p>
            <p
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'cetner',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: 'row',
              }}
            >
              <BsClock /> {new Date(content.time).toLocaleTimeString()}{' '}
              {/\((.*)\)/
                .exec(new Date(content.time).toString())[1]
                .split(' ')
                .map((i) => i[0].toUpperCase())
                .join('')}
            </p>
          </div>
        </div>
      </section>

      <Speakers speakers={content.speakers} />
      {new Date().getTime() < new Date(content.time).getTime() ? (
        <Register register={content.register} />
      ) : (
        ''
      )}
    </Layout>
  );
};
export default IndividualWebinarPage;
