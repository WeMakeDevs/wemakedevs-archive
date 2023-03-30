import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import SpeakerCard from '@/components/Cards/SpeakerCard';
import Layout, { ColumnSection } from '@/components/layout';
import { ButtonLink, UnstyledLink } from '@/components/links';
import ListItem from '@/components/Listitem';

const PerticularhackathonPage = ({ content }) => {
  return (
    <Layout content={content}>
      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#ef4444' offset='0%' />
          <stop stopColor='#8b5cf6' offset='100%' />
        </linearGradient>
      </svg>
      {/* Hero section */}
      <section id='about'>
        <div className='layout flex flex-col items-center justify-center gap-4 py-32'>
          <h1 className='heading highlight'>{content.title}</h1>
          <h2>{content.description}</h2>
          <div className='h2 mt-10 font-bold'>
            Start:{' '}
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
          <div className='h2 font-bold'>
            End:{' '}
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

          <div className='mt-10 flex gap-4'>
            <ButtonLink href='https://docs.napptive.com'>
              Napptive docs
            </ButtonLink>
            <ButtonLink href='https://napptive.com/?utm_source=Kunal&utm_medium=social&utm_campaign=hackathon&utm_id=wemakedevs'>
              Register
            </ButtonLink>
            <ButtonLink href='https://join.napptive.com/slack'>
              Join slack
            </ButtonLink>
          </div>
        </div>
      </section>
      {/* Theme section */}
      <ColumnSection id='theme' src={content.hero} title='About'>
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
      {/* Prizes section */}
      <section id='prizes'>
        <div className='layout py-20 text-center'>
          <h2 className='h1'>Hackathon tracks</h2>
          <hr className='styled-hr mx-auto my-6' />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {content.prizes.map((item) => (
              <div
                className='rounded-xl bg-base-200 p-6 text-left'
                key={item.id}
              >
                <BsTrophy
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2'
                />
                <h3 className='mt-5 font-normal'>{item.title}</h3>
                <p className='mt-4 whitespace-pre-line'>
                  {item.guide !== '' && (
                    <>
                      Unsing the{' '}
                      <UnstyledLink
                        href={item.guide}
                        className='text-primary-disable underline underline-offset-2'
                      >
                        guide
                      </UnstyledLink>
                    </>
                  )}
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
                          these
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
                        Make sure to add #WeMakeDevs when publishing it on
                        Hashnode.
                      </li>
                      <li className='flex items-center gap-2'>
                        <AiOutlineArrowRight className='shrink-0' />
                        Share your blog on Twitter and tag @WeMakeDevs @hashnode
                        @napptivecompany
                      </li>
                    </ul>
                  </>
                )}
                <p className='mt-6 mb-3 text-primary-disable'>Gifts</p>
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
      <section id='speakers'>
        <div className='layout py-20'>
          <h2 className='h1'>Judges</h2>
          <hr className='styled-hr my-6' />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <SpeakerCard
              {...{
                name: 'Kunal Kushawa',
                description: 'DevRel Manger @Civo',
                twitter: 'kunalstwt',
                img: 'https://github.com/kunal-kushwaha.png',
              }}
            />
            {content.judges.map((speaker) => (
              <SpeakerCard {...speaker} key={speaker.image} />
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
                key={item.id}
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

          <div className='relative z-10  mt-20'>
            {content.rules.map((item) => (
              <ListItem className='mx-20 p-2 text-left' key={item.title}>
                <h4 className='mt-5 font-normal'>{item}</h4>
              </ListItem>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PerticularhackathonPage;
