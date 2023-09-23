import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { GiSprint } from 'react-icons/gi';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import { getDate } from '@/lib/utils';

import SpeakerCard from '@/components/Cards/SpeakerCard';
import TimeLineCard from '@/components/Cards/TimeLineCard';
import {
  ColumnSection,
  FAQ,
  Footer,
  Navbar,
  Partner,
} from '@/components/layout';
import { ArrowLink, ButtonLink, UnstyledLink } from '@/components/links';
import ListItem from '@/components/Listitem';

const PerticularhackathonPage = ({ content }) => {
  return (
    <Layout content={content}>
      {/* Hero section */}
      <section>
        <div className='layout flex flex-col items-center justify-center gap-4 py-32'>
          <h1 className='heading highlight'>{content.title}</h1>
          <h2>{content.by}</h2>
          {content.videoUrl ? (
            <iframe
              src={content.videoUrl}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
            ></iframe>
          ) : content.image ? (
            <img
              alt='blog'
              className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
              src={content.image}
            />
          ) : (
            `Add videoUrl or image to ${content.slug}.json file`
          )}

          <div className='h2 mt-10 font-normal'>
            <span className='font-bold'>Start: </span>
            {/* {getDateTime(content.from)} */}
            {getDate(content.from)}
          </div>
          <div className='h2 font-normal'>
            <span className='font-bold'>End: </span>
            {/* {getDateTime(content.to)} */}
            {getDate(content.to)}
          </div>
          <div className='h2 text-center font-bold'>
            {/* Winner announcement: {getDateTime(content.winnerAnnouc)} */}
            Winner announcement: {getDate(content.winnerAnnouc)}
          </div>

          <div className='flex flex-col gap-4 md:flex-row'>
            {new Date().getTime() < new Date(content.from).getTime() ? (
              <ButtonLink as={ArrowLink} className='mt-10' href='#register'>
                Register
              </ButtonLink>
            ) : new Date().getTime() < new Date(content.to).getTime() ? (
              <ButtonLink
                as={ArrowLink}
                className='md:mt-10'
                href={content.liveUrl}
              >
                Watch recording
              </ButtonLink>
            ) : (
              <ButtonLink as={ArrowLink} className='mt-10' href='#resources'>
                Join now
              </ButtonLink>
            )}
            {content.submissionForm && (
              <ButtonLink
                as={ArrowLink}
                className='md:mt-10'
                href={content.submissionForm}
              >
                Submit Project
              </ButtonLink>
            )}
          </div>
        </div>
      </section>
      {/* Theme section */}
      <ColumnSection id='about' src={content.hero} title='About'>
        {content.about.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ColumnSection>
      {/* timeline section */}
      {content.timeline.length > 0 && (
        <section id='timeline'>
          <div className='layout py-20'>
            <h2 className='h1 text-center'>Timeline</h2>
            <hr className='styled-hr mx-auto my-6' />
            <ol className='mt-9 flex flex-col flex-wrap justify-center gap-y-6 md:flex-row'>
              {content.timeline.map((timeline) => {
                return <TimeLineCard {...timeline} key={timeline.date} />;
              })}
            </ol>
          </div>
        </section>
      )}
      {/* Tracks section */}
      {content.tracks && (
        <section id='tracks'>
          <div className='layout py-20 text-center'>
            <h2 className='h1 mb-4'>Hackathon tracks</h2>
            <p className='h4 mt-2 font-normal'>
              Choose the track that best suits your skills and interests and win
              prizes worth of $1200
            </p>

            <hr className='styled-hr mx-auto my-6' />
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {content.tracks.map((item) => (
                <div
                  className='rounded-xl bg-base-200 p-6 text-left'
                  key={item.title}
                >
                  <GiSprint
                    style={{ fill: 'url(#blue-gradient)' }}
                    className='h2'
                  />
                  <h3 className='mt-5 font-normal'>{item.title}</h3>
                  <p className='mt-4 whitespace-pre-line'>
                    {item.guide !== '' && item.guide && (
                      <>
                        Using the{' '}
                        <UnstyledLink
                          href={item.guide}
                          className='text-primary-disable underline underline-offset-2'
                        >
                          guide
                        </UnstyledLink>
                      </>
                    )}{' '}
                    {item.description}
                  </p>
                  {item.guide === '' && (
                    <>
                      <p className='mt-6 mb-3 text-primary-disable'>
                        Steps to take part:
                      </p>
                      <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2'>
                          <AiOutlineArrowRight className='shrink-0' />{' '}
                          <span>
                            Write a blog on your learnings on Hashnode following
                            these{' '}
                            <UnstyledLink
                              href='https://wemakedevs.org/events/hashnode'
                              className='text-primary-disable underline underline-offset-2'
                            >
                              steps
                            </UnstyledLink>
                          </span>
                        </li>
                        <li className='flex items-center gap-2'>
                          <AiOutlineArrowRight className='shrink-0' /> Make sure
                          to add #WeMakeDevs when publishing it on Hashnode.
                        </li>
                        <li className='flex items-center gap-2'>
                          <AiOutlineArrowRight className='shrink-0' />
                          Share your blog on Twitter and tag @WeMakeDevs
                          @hashnode @napptivecompany
                        </li>
                      </ul>
                    </>
                  )}
                  {item.gift && (
                    <>
                      <p className='mt-6 mb-3 text-primary-disable'>
                        Prizes worth
                      </p>
                      <ul className='flex flex-col gap-2'>
                        {item.gift.map((gift) => (
                          <li className='flex items-center gap-2' key={gift}>
                            <AiOutlineArrowRight className='shrink-0' /> {gift}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.image && (
                    <figure className='mt-3 flex aspect-square w-full items-center justify-center rounded-lg bg-content/10'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='rounded-md object-cover'
                      />
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Prizes section */}
      {content.prizes.length > 0 && (
        <section id='tracks'>
          <div className='layout py-20 text-center'>
            <h2 className='h1 mb-4'>Prizes for this hackathon</h2>
            <hr className='styled-hr mx-auto my-6' />
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {content.prizes.map((item) => (
                <div
                  className='rounded-xl bg-base-200 p-6 text-left'
                  key={item.title}
                >
                  <BsTrophy
                    style={{ fill: 'url(#blue-gradient)' }}
                    className='h2'
                  />
                  <h3 className='mt-5 font-normal'>{item.title}</h3>
                  <p className='mt-4 whitespace-pre-line'>{item.description}</p>
                  <figure className='mt-3 flex aspect-square w-full items-center justify-center rounded-lg bg-content/10'>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className='rounded-md object-cover'
                      />
                    ) : (
                      <div className='mx-2 flex flex-col gap-2'>
                        {item.gift.map((gift, index) => (
                          <li className='flex gap-2 text-xl' key={index}>
                            <AiOutlineArrowRight className='mt-1 shrink-0' />{' '}
                            {gift}
                          </li>
                        ))}
                      </div>
                    )}
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Judges */}
      <section id='judges'>
        <div className='layout py-20'>
          <h2 className='h1'>Judges</h2>
          <hr className='styled-hr my-6' />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <SpeakerCard
              {...{
                name: 'Kunal Kushwaha',
                description: 'DevRel Manager @Civo',
                twitter: 'kunalstwt',
                img: 'https://github.com/kunal-kushwaha.png',
              }}
            />
            {content.judges.map((speaker) => (
              <SpeakerCard {...speaker} key={speaker.img} />
            ))}
          </div>
        </div>
      </section>
      {/* criteria section */}
      <section id='criteria'>
        <div className='layout py-20 text-center'>
          <h2 className='h1'>Judging criteria</h2>
          <p className='h4 mt-2 font-normal'>
            The judges will be looking for the following criteria when
            evaluating
          </p>
          <hr className='styled-hr mx-auto my-6' />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {content.criteria.map((item) => (
              <div
                className='rounded-xl bg-base-200 p-6 text-left'
                key={item.name}
              >
                <VscDebugBreakpointLogUnverified
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2'
                />
                <h3 className='mt-5 font-normal'>{item.name}</h3>
                <p className='mt-2'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Rules section */}
      <section id='rules' className='overflow-x-hidden'>
        <div className='layout py-20 text-center'>
          <h2 className='h1'>What are the rules?</h2>
          <p className='h4 mt-2 font-normal'>
            Please check out the various theme requirements to be eligible for
            prizes.
          </p>
          <hr className='styled-hr mx-auto my-6' />

          <ul className='mx-auto max-w-5xl space-y-5'>
            {content.rules.map((item) => (
              <li
                className='h3 flex gap-2 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'
                key={item}
              >
                <MdOutlineLabelImportant
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2 shrink-0 text-primary'
                />{' '}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Resources Section */}
      <section id='resources'>
        <div className='layout py-20 text-center'>
          <h2 className='h1'>Resources</h2>
          <hr className='styled-hr mx-auto my-6' />
          <ul className='mx-auto max-w-5xl space-y-5'>
            {content.takepart.map((item) => (
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
      {/* Register Section */}
      {new Date().getTime() < new Date(content.to).getTime() ? (
        <Register name={content.slug} />
      ) : (
        ''
      )}
    </Layout>
  );
};

export default PerticularhackathonPage;

const Layout = ({ content, children }) => {
  return (
    <>
      <Navbar links={content.header} cta={content.CTA} />
      <main className='main'>
        {children}
        <Partner />
        <FAQ faq={content.faq} />
      </main>
      <Footer />
    </>
  );
};

const Register = ({ name }) => {
  const [iframeHeight, setIframeHeight] = useState(790);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      setIframeHeight(890);
    } else if (windowWidth < 1250) {
      setIframeHeight(700);
    } else {
      setIframeHeight(790);
    }
  }, []);

  return (
    <section id='register'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
        <h2 className='h1'>Register for the hackathon</h2>
        <hr className='styled-hr' />
        <iframe
          src={`https://wemakedevs-newsletter.netlify.app/${name}.html`}
          width='100%'
          style={{ border: '0' }}
          height={iframeHeight}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </section>
  );
};
