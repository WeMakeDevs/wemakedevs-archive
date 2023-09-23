import { useEffect, useState } from 'react';
import { BiCool } from 'react-icons/bi';
import { BsFillMicFill, BsFillPeopleFill } from 'react-icons/bs';
import { CiPizza } from 'react-icons/ci';
import { DiAsterisk } from 'react-icons/di';

import { getDateTime } from '@/lib/utils';

import { meetupTweetId } from '@/content/prizetweetid';

import AgendaCard from '@/components/Cards/AgendaCard';
import SpeakerCard from '@/components/Cards/SpeakerCard';
import SponserCard from '@/components/Cards/SponserCard';
import StatCard from '@/components/Cards/StatCard';
import Layout, { Testimonials } from '@/components/layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import ListItem from '@/components/Listitem';

const ParticularMeetupPage = ({ content }) => {
  const [tweetId, setTweetId] = useState(meetupTweetId);

  return (
    <Layout
      content={{
        ...content,

        CTA: {
          name: 'Partner',
          href: '#partnerwithus',
        },
      }}
    >
      <section id='about'>
        <div className='layout flex flex-col items-center justify-center gap-4 py-32 text-center'>
          <h1 className='heading highlight'>{content.title}</h1>
          <h2 className='mt-5 font-medium'>
            {content.description.map((textObj) => (
              <>
                {textObj.type === 'higlight' ? (
                  <span className='highlight'> {textObj.text} </span>
                ) : (
                  textObj.text
                )}
              </>
            ))}
          </h2>
          <iframe
            src={content.venueVideoLink}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
          ></iframe>
          <div className='h2 mt-12 font-semibold'>
            {getDateTime(content.on)} onwards
          </div>
          <ButtonLink as={ArrowLink} href='/coc'>
            Code of conduct
          </ButtonLink>
        </div>
      </section>
      {/* Why to Join */}
      <section className='relative'>
        <div className='layout py-20'>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-20'>
            <div className='flex w-full items-center justify-center lg:order-2 lg:w-1/2'>
              <div className='flex h-full flex-1 flex-col gap-4'>
                <h1 className='font-bold'>Why join?</h1>
                <ul className='mt-4 space-y-2'>
                  {content.whyjoin.map((item) => {
                    return (
                      <ListItem
                        className='relative z-10 w-full cursor-pointer items-center rounded-md border-none bg-base-200/80 p-5 text-white'
                        iconClassName='text-white'
                        icon={DiAsterisk}
                        key={item}
                      >
                        {item}
                      </ListItem>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className='relative w-full overflow-hidden lg:order-1 lg:w-1/2'>
              <img className='w-full' src={content.heroImg} alt='Why to join' />
            </div>
          </div>

          <div className='mx-auto mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {[
              {
                name: 'Attending',
                value: 450,
                icon: BsFillPeopleFill,
              },
              {
                name: 'Talks by amazing speakers',
                value: 5,
                icon: BsFillMicFill,
              },
              {
                name: 'Free pizza',
                value: '',
                suffix: '',
                icon: CiPizza,
              },
              {
                name: 'Cool swags',
                value: '',
                suffix: '',
                icon: BiCool,
              },
            ].map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                suffix={stat.suffix && '+'}
                number={stat.value}
                title={stat.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section id='agenda'>
        <div className='layout py-20'>
          <h2 className='h1 text-center'>Agenda</h2>
          <hr className='styled-hr mx-auto my-6' />

          <ol className='mx-auto mt-9 grid grid-cols-1 justify-center lg:grid-cols-[repeat(2,_minmax(0,32rem))]'>
            {content.agendas.map((item, i) => (
              <AgendaCard key={i} id={i} {...item} />
            ))}
          </ol>
        </div>
      </section>

      <section id='speakers'>
        <div className='layout py-20'>
          <h2 className='h1 text-center'>Speakers</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {content.speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      <section id='sponsors'>
        <div className='layout py-20 text-center'>
          <h2 className='h1 '>Sponsors</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <ol className='item-stretch flex flex-wrap justify-center gap-6'>
            {content.sponsors.length > 0 ? (
              content.sponsors.map((sponser) => (
                <SponserCard key={sponser.name} {...sponser} />
              ))
            ) : (
              <h3 className='h4'>Sponsors are going to be announced soon...</h3>
            )}
          </ol>
        </div>
      </section>

      <section id='com-sponser'>
        <div className='layout py-20 text-center'>
          <h2 className='h1 '>Community partners</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <ol className='flex flex-wrap items-center justify-center gap-6'>
            {content.comuSponsors.length > 0 ? (
              content.comuSponsors.map((sponser) => (
                <SponserCard key={sponser.name} {...sponser} />
              ))
            ) : (
              <h3 className='h4'>
                Community partners are going to be announced soon...
              </h3>
            )}
          </ol>
        </div>
      </section>

      <section id='past-meetup'>
        <div className='py-20 text-center'>
          <h2 className='h1'>Past meetup</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <div className='layout grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 9 }, () => '/assets/images/meetup/').map(
              (prevImg, i) => (
                <figure
                  key={i}
                  className='relative aspect-video w-full overflow-hidden rounded-md'
                >
                  <img
                    src={`${prevImg}${i + 1}.jpeg`}
                    className='object-center'
                  />
                </figure>
              )
            )}
          </div>
        </div>
      </section>

      <section id='past-meetup-pic'>
        <div className='py-20 text-center'>
          <h2 className='h1'>Minutes of past meetups</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <iframe
            src='https://www.youtube.com/embed/0GrYQjbbooo'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mx-auto mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
          ></iframe>
        </div>
      </section>
      <Testimonials
        tweetId={tweetId}
        setTweetId={setTweetId}
        title='Community testimonials'
      />
      <Register content={content} />
    </Layout>
  );
};

export default ParticularMeetupPage;

const Register = ({ content }) => {
  const [iframeHeight, setIframeHeight] = useState(1200);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 900) {
      setIframeHeight(1200);
    } else if (windowWidth < 1250) {
      setIframeHeight(700);
    } else {
      setIframeHeight(1200);
    }
  }, []);

  return (
    <section id='register'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
        {new Date().getTime() >
        new Date(content.registerationClose).getTime() ? (
          <>
            <h2 className='h1'>Registrations have been closed</h2>
            <hr className='styled-hr' />
          </>
        ) : (
          <>
            <h2 className='h1'>Register</h2>
            <hr className='styled-hr' />
            <iframe
              src={`https://wemakedevs-newsletter.netlify.app/${content.slug}.html`}
              width='100%'
              style={{ border: '0' }}
              height={iframeHeight}
              title='Subscribe to our newsletter by entering your details below'
            ></iframe>
          </>
        )}
      </div>
    </section>
  );
};
