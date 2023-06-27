import { useState } from 'react';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { VscDebugBreakpointLog } from 'react-icons/vsc';

import Layout, { ColumnSection, Testimonials } from '@/components/layout';
import { ArrowLink, ButtonLink } from '@/components/links';
import ListItem from '@/components/Listitem';

import OpenSourceHeroImg from '@/assets/courses/opensource.avif';

const OpenSourcePage = ({ content }) => {
  const [tweetId, setTweetId] = useState([
    '1537416341245681665',
    '1656911832811184129',
    '1656561217442562051',
    '1656959959450394624',
    '1656141618129547264',
    '1658437060833968129',
    '1655812888387530753',
  ]);

  return (
    <Layout content={content}>
      {/* About section */}

      <div className='mt-24 mb-10'>
        <div className='layout'>
          <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
            <div className='absolute inset-0'>
              <img
                className='h-full w-full object-cover opacity-50'
                src={OpenSourceHeroImg}
                alt='People working on laptops'
              />
              <div className='absolute inset-0 bg-primary mix-blend-multiply' />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                <span className='block text-content'>
                  Unlocking the Potential of
                </span>
                <span className='block text-indigo-200'>Open Source</span>
              </h1>
              <p className='mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl'>
                At Open Source Course, we believe in the power of collaboration
                and the immense value it brings to the world of technology.
                <br /> Our mission is to empower developers like you by
                providing comprehensive open source education, connecting you
                with industry experts, and guiding you through the exciting
                journey of contributing to real-world projects.
                <br /> Whether you're a seasoned developer or just starting out,
                our course is designed to enhance your skills, boost your
                confidence, and open doors to endless opportunities in the tech
                industry.
              </p>
              <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
                <ButtonLink href='#sec-structure' as={ArrowLink}>
                  Course structure
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Should I Join */}
      <ColumnSection
        id='sec-about'
        src='https://www.youtube.com/embed/msyGybzCKRs'
        isVideo
        title='About'
        direction='left'
      >
        <ListItem>
          Open source is the driving force behind many of the technologies we
          use today.
        </ListItem>
        <ListItem>
          It fosters collaboration, encourages knowledge sharing, and fuels
          innovation.
        </ListItem>
        <ListItem>
          By participating in open source projects, you not only gain valuable
          technical skills but also develop crucial soft skills such as
          communication, teamwork, and problem-solving.
        </ListItem>
        <ListItem>
          Additionally, contributing to open source can boost your visibility in
          the developer community, attract potential employers, and create a
          strong foundation for your future career.
        </ListItem>
        <ListItem>
          Join us to unlock the endless possibilities that open source offers.
        </ListItem>
      </ColumnSection>

      {/* Course Strucure */}
      <section id='sec-structure'>
        <div className='layout py-20 text-center'>
          <h2 className='h1 mb-4'>Comprehensive course structure</h2>
          <p className='h4 mx-auto mt-2 max-w-2xl font-normal'>
            Your potential through structured lectures, expert guidance, and
            real-world assignments
          </p>
          <hr className='styled-hr mx-auto my-6' />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {content.structure.points.map((item) => (
              <div className='rounded-xl bg-base-200 p-8 text-left' key={item}>
                <VscDebugBreakpointLog
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2'
                />
                <h3 className='mt-5 font-normal'>{item}</h3>
              </div>
            ))}
          </div>
          {content.structure.btns && (
            <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
              {content.structure.btns.map((btn) => (
                <ButtonLink as={ArrowLink} href={btn.link} key={btn.text}>
                  {btn.text}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id='sec-learninpublic' className='overflow-x-hidden'>
        <div className='layout py-20 text-center'>
          <h2 className='h1'>
            Learn in public: Share your journey and grow as a developer
          </h2>
          <p className='h4 mt-2 font-normal'>
            Embrace transparency, build connections, and elevate your skills
            through #OpenSourceWithKunal
          </p>
          <hr className='styled-hr mx-auto my-6' />

          <ul className='mx-auto max-w-5xl space-y-5'>
            {content.learninpublic.map((item) => (
              <li
                className='h3 flex w-full gap-3 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'
                key={item.title}
              >
                <MdOutlineLabelImportant
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2 inline-block text-primary'
                />
                <span>
                  {' '}
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

      <Testimonials
        tweetId={tweetId}
        setTweetId={setTweetId}
        title='Open Source Testimonials'
      />

      <section id='register'>
        <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
          <h2 className='h1'>Register for course</h2>
          <hr className='styled-hr' />
          <iframe
            src='https://wemakedevs-newsletter.vercel.app/opensource-course.html'
            width='100%'
            style={{ border: '0' }}
            height={700}
            title='Register for the course'
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default OpenSourcePage;
