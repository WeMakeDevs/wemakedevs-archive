import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import SpeakerCard from '@/components/Cards/SpeakerCard';
import { ColumnSection, FAQ, Footer, Navbar } from '@/components/layout';
import { ArrowLink, ButtonLink, UnstyledLink } from '@/components/links';
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
      <section>
        <div className='layout flex flex-col items-center justify-center gap-4 py-32'>
          <h1 className='heading highlight'>{content.title}</h1>
          <h2>{content.description}</h2>
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

          <ButtonLink className='mt-10 flex gap-4' href='#register'>
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
      <section id='tracks'>
        <div className='layout py-20'>
          <h2 className='h1 text-center'>Timeline</h2>

          <ol className='mt-9 items-center sm:flex'>
            <li className='relative mb-6 sm:mb-0'>
              <div className='flex items-center'>
                <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
                  <svg
                    aria-hidden='true'
                    className='h-3 w-3 text-blue-800 dark:text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'></div>
              </div>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Start
                </h3>
                <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  14th April 8am IST
                </time>
              </div>
            </li>
            <li className='relative mb-6 sm:mb-0'>
              <div className='flex items-center'>
                <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
                  <svg
                    aria-hidden='true'
                    className='h-3 w-3 text-blue-800 dark:text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'></div>
              </div>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  End of Day 1
                </h3>
                <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  15th April 12 am IST
                </time>
              </div>
            </li>
            <li className='relative mb-6 sm:mb-0'>
              <div className='flex items-center'>
                <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
                  <svg
                    aria-hidden='true'
                    className='h-3 w-3 text-blue-800 dark:text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'></div>
              </div>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  End of Day 2
                </h3>
                <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  16th April 12am IST
                </time>
              </div>
            </li>
            <li className='relative mb-6 sm:mb-0'>
              <div className='flex items-center'>
                <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
                  <svg
                    aria-hidden='true'
                    className='h-3 w-3 text-blue-800 dark:text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'></div>
              </div>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Submissions start
                </h3>
                <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  16th April 11am IST
                </time>
              </div>
            </li>
            <li className='relative mb-6 sm:mb-0'>
              <div className='flex items-center'>
                <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
                  <svg
                    aria-hidden='true'
                    className='h-3 w-3 text-blue-800 dark:text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'></div>
              </div>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Submission Deadline
                </h3>
                <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  16th April 8PM IST
                </time>
              </div>
            </li>
          </ol>
        </div>
      </section>
      {/* Prizes section */}
      <section id='tracks'>
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
                    <p className='h2 mt-6 mb-3 text-primary-disable'>
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
                <p className='h2 mt-6 mb-3 text-primary-disable'>
                  Prizes worth <span className='font-bold'>$1200</span>
                </p>
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

          <ul className='mx-auto max-w-5xl space-y-5'>
            {content.rules.map((item) => (
              <li
                className='h3 flex gap-2 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'
                key={item.title}
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
      {/* Register Section */}
      <section id='register'>
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
