import { useState } from 'react';
import { BsAward } from 'react-icons/bs';
import { MdOutlineLabelImportant } from 'react-icons/md';
import {
  VscDebugBreakpointFunction,
  VscDebugBreakpointLog,
} from 'react-icons/vsc';

import { opensourcetweet } from '@/content/opensource';

import {
  Footer,
  JoinUs,
  Navbar,
  Partner,
  Testimonials,
} from '@/components/layout';
import Faq from '@/components/layout/Faq';
import { ArrowLink, ButtonLink, HeaderLink } from '@/components/links';

import OpenSourceHeroImg from '@/assets/courses/opensource.avif';

const OpenSourcePage = ({ content }) => {
  const [tweetId, setTweetId] = useState(opensourcetweet);

  const handleClick = () => {
    const twitterUrl =
      'https://twitter.com/intent/tweet?text=%23OpenSourceWithKunal';
    window.open(twitterUrl, '_blank');
  };

  return (
    <>
      <Navbar links={content.header} cta={content.CTA} />
      <main className='main'>
        {/* About section */}
        <div className='mt-24 mb-10'>
          <div className='layout'>
            <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
              <div className='absolute inset-0 opacity-30'>
                <img
                  className='h-full w-full object-cover'
                  src={OpenSourceHeroImg}
                  alt='People working on laptops'
                />
                <div className='absolute inset-0 bg-primary mix-blend-multiply' />
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 className='heading heading-md text-center font-extrabold tracking-tight '>
                  <span className='block text-content'>Your guide to</span>
                  <span className='block text-indigo-200'>
                    open source contributions
                  </span>
                </h1>
                <iframe
                  src='https://www.youtube.com/embed/inZUgh8p1d4'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                  className='mx-auto mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 border-content/50 object-cover shadow-[0_1rem_3rem] shadow-content/30'
                ></iframe>
                <p className='mx-auto mt-6 max-w-lg text-center text-xl text-indigo-100 sm:max-w-[50rem]'>
                  Welcome to the immersive Open Source Course, where we empower
                  individuals with skills to thrive in open source. Dive into
                  this comprehensive program to explore open source principles,
                  contribute to projects, and excel in the tech industry. Join
                  us for a transformative journey and exciting career prospects.
                </p>
                <div className='mx-auto mt-10 flex justify-center'>
                  <ButtonLink href='#sec-structure' as={ArrowLink}>
                    Course structure
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Should I Join */}
        <section id='sec-about'>
          <div className='layout py-20 text-center'>
            <h2 className='h1 mb-4'> Who should join this course? </h2>
            <hr className='styled-hr mx-auto my-6' />
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {content.whyjoin.map((item) => (
                <div className='pt-6' key={item}>
                  <div className='rounded-xl bg-base-200 p-8 text-left'>
                    <div className='mx-auto -mt-12 flex max-w-max items-center justify-center rounded-md bg-white p-2'>
                      <BsAward
                        style={{ fill: 'url(#blue-gradient)' }}
                        className='h2'
                      />
                    </div>
                    <h3 className='mt-5 font-normal'>{item.title}</h3>
                    <p className='mt-4 font-normal'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section id='sec-structure'>
          <div className='layout py-20 text-center'>
            <h2 className='h1 mb-4'>Course structure</h2>
            <p className='h4 mx-auto mt-2 max-w-2xl font-normal'>
              Learn by doing
            </p>
            <hr className='styled-hr mx-auto my-6' />
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {content.structure.points.map((item) => (
                <div
                  className='rounded-xl bg-base-200 p-8 text-left'
                  key={item}
                >
                  <VscDebugBreakpointLog
                    style={{ fill: 'url(#blue-gradient)' }}
                    className='h2'
                  />
                  <h3 className='mt-5 font-normal'>{item.title}</h3>
                  <ul>
                    {item.points.map((point) => (
                      <li
                        className='h4 mt-2 inline-flex items-baseline gap-2  font-normal text-content/90'
                        key={point}
                      >
                        <VscDebugBreakpointFunction className='shrink-0' />{' '}
                        {point}
                      </li>
                    ))}
                  </ul>
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
            <h2 className='h1'>Learn in public</h2>
            <p className='h4 mt-2 font-normal'>
              Share your journey and grow as a developer
            </p>
            <hr className='styled-hr mx-auto my-6' />

            <ul className='mx-auto max-w-5xl space-y-5'>
              <li className='h3 flex w-full gap-3 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'>
                <MdOutlineLabelImportant
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2 inline-block text-primary'
                />
                <span>
                  Use{' '}
                  <button
                    className='relative bg-purple-700/50'
                    onClick={handleClick}
                  >
                    #OpenSourceWithKunal
                  </button>{' '}
                  on Twitter and share your journey regularly
                </span>
              </li>
              <li className='h3 flex w-full gap-3 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'>
                <MdOutlineLabelImportant
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2 inline-block text-primary'
                />
                <span>
                  There will be a{' '}
                  <HeaderLink
                    openNewTab
                    className='text-indigo-300 after:h-[2px] after:bg-white'
                    href='/events/hashnode'
                  >
                    blogging challenge
                  </HeaderLink>{' '}
                  along with this where you can win exciting prizes.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <Testimonials
          tweetId={tweetId}
          setTweetId={setTweetId}
          title='Testimonials'
          btnText='See more testimonials #OpenSourceWithKunal'
          btnLink='https://twitter.com/search?q=%23OpenSourceWithKunal'
        />
        <Faq faq={content.faq} />

        <JoinUs />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default OpenSourcePage;
