import BannerImage from 'assets/home/courses.png';
import { BsCalendar, BsClock } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';

import Layout, { ColumnSection } from '@/components/layout';
import { ArrowLink } from '@/components/links';
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
      {/* Details */}
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
      {/* Time */}
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

      {/* Speakers */}
      <Speakers speakers={content.speakers} />

      {/* Register */}
      {new Date().getTime() < new Date(content.time).getTime() ? (
        <Register register={content.register} />
      ) : (
        // ''
        <iframe
          // width='540'
          // height='305'
          src='https://bed11154.sibforms.com/serve/MUIFAJjoyXj9kDFocWk3PGb0MmhkBqlDH7E7ColymPm5POezlTFqyl4IwycPRLg6GD8BZnuHJujMf8pkWlL73m0ImrV97HtV8DSi9Eqd252PLMIaIgyrFFrk1b3VincTJExNi0JyP6jZ0IvxnqWRgmk6mW9CCM8R3KaDTN0e1o2M22Uhz0xqWuUjalgzlVx9dfMIV0Zx5coI5YuN'
          frameBorder='0'
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            height: '100%',
            scrollBehavior: 'none',
          }}
        ></iframe>
      )}

      {/* Resources */}
      {content.links && (
        <section id='resources'>
          <div className='layout py-20 text-center'>
            <h2 className='h1'>Resources</h2>
            <hr className='styled-hr mx-auto my-6' />
            <ul className='mx-auto max-w-5xl space-y-5'>
              {content.links.map((item) => (
                <li
                  className='h3 flex gap-2 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'
                  key={item.title}
                >
                  <HiOutlineArrowRight
                    style={{ fill: 'url(#blue-gradient)' }}
                    className='h2 shrink-0'
                  />{' '}
                  <span>
                    {item.title}{' '}
                    {item.link && (
                      <ArrowLink
                        href={item.link.href}
                        className='inline-flex items-center text-primary'
                      >
                        {item.link.title}
                      </ArrowLink>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Layout>
  );
};
export default IndividualWebinarPage;
