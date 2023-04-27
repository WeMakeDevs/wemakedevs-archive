import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import SpeakerCard from '@/components/Cards/SpeakerCard';
import TimeLineCard from '@/components/Cards/TimeLineCard';
import { ColumnSection, FAQ, Footer, Navbar } from '@/components/layout';
import { ArrowLink, ButtonLink, UnstyledLink } from '@/components/links';
import ListItem from '@/components/Listitem';

const PerticularhackathonPage = ({ content }) => {
  return (
    <Layout content={content}>
      {/* Hero section */}
      <section>
        <div className='layout flex flex-col items-center justify-center gap-4 py-32'>
          <h1 className='heading highlight'>{content.title}</h1>
          <h2>{content.description}</h2>
          <iframe
            src={content.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
          ></iframe>
          <div className='h2 mt-10 font-normal'>
            <span className='font-bold'>Start: </span>
            {new Date(content.from).toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}{' '}
            {new Date(content.from).toLocaleTimeString('en-US', {
              timeStyle: 'short',
            })}{' '}
            {/\((.*)\)/
              .exec(new Date(content.from).toString())[1]
              .split(' ')
              .map((i) => i[0].toUpperCase())
              .join('')}
          </div>
          <div className='h2 font-normal'>
            <span className='font-bold'>End: </span>{' '}
            {new Date(content.to).toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}{' '}
            {new Date(content.to).toLocaleTimeString('en-US', {
              timeStyle: 'short',
            })}{' '}
            {/\((.*)\)/
              .exec(new Date(content.to).toString())[1]
              .split(' ')
              .map((i) => i[0].toUpperCase())
              .join('')}
          </div>
          <div className='h2 font-bold'>
            Winnner announcement{' '}
            {new Date(content.winnerAnnouc).toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}{' '}
            {new Date(content.winnerAnnouc).toLocaleTimeString('en-US', {
              timeStyle: 'short',
            })}{' '}
            {/\((.*)\)/
              .exec(new Date(content.winnerAnnouc).toString())[1]
              .split(' ')
              .map((i) => i[0].toUpperCase())
              .join('')}
          </div>

          <ButtonLink as={ArrowLink} className='mt-10' href='#register'>
            Register
          </ButtonLink>
        </div>
      </section>
      {/* Theme section */}
      <ColumnSection id='about' src={content.hero} title='About'>
        <ListItem>
          Do you want to learn new skills, discover how to build and deploy
          cloud native apps and meet like-minded people? Find this and much more
          and take part in our hackathon!
        </ListItem>
        <ListItem>
          If you want to learn new skills, discover how to build and deploy
          cloud native apps and meet like-minded people, this is your chance to
          collaborate with other talented developers and work together to build
          something amazing.
        </ListItem>
        <ListItem>
          You will have access to a cutting-edge platform, based on the most
          advanced cloud-native technology and get the opportunity to learn from
          experts and gain valuable experience working on real applications.
        </ListItem>
        <ListItem>
          The WeMakeDevs {'<>'} Napptive Hackathon is the right place for you if
          you are a passionate, hands-on dev. The will to push yourself to new
          limits and learn along the way is all you need to begin!
        </ListItem>
      </ColumnSection>
      {/* timeline section */}
      <section id='timeline'>
        <div className='layout py-20'>
          <h2 className='h1 text-center'>Timeline</h2>
          <hr className='styled-hr mx-auto my-6' />
          <ol className='mt-9 flex flex-col flex-wrap justify-center gap-y-6 md:flex-row'>
            <TimeLineCard
              title='Hackathon starts'
              date='Fri, 14 Apr 2023 02:30:00 GMT'
            />
            <TimeLineCard
              title='Hackathon kick off, join the live stream to ask questions related to hackathon'
              date='https://www.youtube.com/watch?v=sST7JGLq2as'
              isLink
            />
            <TimeLineCard
              title='Day 2 of hacking'
              date='Sat, 15 Apr 2023'
              onlyDate
            />
            <TimeLineCard
              title='Day 3 of hacking'
              date='Sun, 16 Apr 2023'
              onlyDate
            />
            <TimeLineCard
              title='Hacking ends'
              date='Sun, 16 Apr 2023 14:30:00 GMT'
            />
            <TimeLineCard
              title='Submission period'
              date='16 Apr 2023 14:30:00 GMT'
              end='16 Apr 2023 15:30:00 GMT'
            />
            <TimeLineCard
              title='Winner announcement'
              date='Mon, 17 Apr 2023 11:30:00 GMT'
              onlyDate
            />
          </ol>
        </div>
      </section>
      {/* Prizes section */}
      <section id='tracks'>
        <div className='layout py-20 text-center'>
          <h2 className='h1 mb-4'>Hackathon tracks</h2>
          <p className='h4 mt-2 font-normal'>
            Choose the track that best suits your skills and interests and win
            prizes worth of $1200
          </p>
          <p className='h4 mt-2 font-normal text-gray-400'>
            Potential internship offer to participants who perform well!
          </p>
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
                <p className='mt-4 whitespace-pre-line'>
                  {item.guide !== '' && (
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
                        Share your blog on Twitter and tag @WeMakeDevs @hashnode
                        @napptivecompany
                      </li>
                    </ul>
                  </>
                )}
                <p className='mt-6 mb-3 text-primary-disable'>Prizes worth</p>
                <ul className='flex flex-col gap-2'>
                  {item.gift.map((gift) => (
                    <li className='flex items-center gap-2' key={gift}>
                      <AiOutlineArrowRight className='shrink-0' /> {gift}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
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
      <Register name={content.slug} />
      {/* Register Section */}
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
          src={`https://wemakedevs-newsletter.vercel.app/${name}.html`}
          width='100%'
          style={{ border: '0' }}
          height={iframeHeight}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </section>
  );
};
