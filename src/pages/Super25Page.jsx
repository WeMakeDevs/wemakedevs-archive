import { DiAsterisk } from 'react-icons/di';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { VscDebugBreakpointLog } from 'react-icons/vsc';

import Super25TimeLineCard from '@/components/Cards/Super25TimeLineCard';
import Layout from '@/components/layout';
import { ArrowLink, ButtonLink } from '@/components/links';
import ListItem from '@/components/Listitem';

const Super25Page = ({ content }) => {
  return (
    <Layout content={content}>
      <section id='about'>
        <div className='layout flex flex-col items-center justify-center gap-10 py-20 pt-28 text-left md:text-center lg:flex-row lg:text-left'>
          <div>
            <h1 className='heading heading-md bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text text-left font-bold text-transparent md:text-center lg:text-left'>
              Join the Super 25 program for exclusive benefits
            </h1>
            <p className='h3 my-9'>
              Expand your knowledge and enhance your skills with our expert-led
              webinars on a wide range of topics.
            </p>
            <ButtonLink
              as={ArrowLink}
              className='items-center justify-center'
              href='#register'
              disabled
            >
              Apply Now
            </ButtonLink>
          </div>
          <div className='relative w-full max-w-lg shrink-0'>
            <img src='/assets/images/super25/hero.svg' className='w-full' />
          </div>
        </div>
      </section>

      {/* Why to Join */}
      <section id='benefits'>
        <div className='layout flex flex-col gap-5 py-20 lg:flex-row lg:items-center lg:gap-10 xl:gap-20'>
          <div className='flex w-full items-center justify-center lg:order-2 lg:w-1/2'>
            <div className='flex h-full flex-1 flex-col gap-4'>
              <h1 className='font-bold'>Benefits</h1>
              <ul className='mt-4 space-y-2'>
                {content.whyjoin.map((item, i) => {
                  return (
                    <ListItem
                      className='relative z-10 w-full cursor-pointer items-center rounded-md border-none bg-base-200/80 p-5 text-white'
                      iconClassName='text-white'
                      icon={DiAsterisk}
                      key={`${item}${i}`}
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
      </section>

      {/* Agenda */}
      <section id='timeline'>
        <div className='layout py-20'>
          <h2 className='h1 text-center'>Super 25 timeline</h2>
          <p className='h4 mt-2 text-center font-normal'>
            Stay up to date with the important dates for the upcoming cohort,
            from the application process to the start and end dates of the
            program.
          </p>
          <hr className='styled-hr mx-auto my-6' />
          <ol className='mx-auto mt-9 grid grid-cols-1 justify-center lg:grid-cols-[repeat(2,_minmax(0,32rem))]'>
            {content.agendas.map((item, i) => (
              <Super25TimeLineCard key={i} id={i} {...item} />
            ))}
          </ol>
        </div>
      </section>

      {/* Eligibile Section */}
      <section id='eligibile'>
        <div className='layout py-20 text-center'>
          <h2 className='h1 mb-4'>Eligibility Criteria for Membership</h2>
          <p className='h4 mt-2 font-normal'>
            To ensure a high-quality community experience, we have established
            the following criteria for membership. Please review before applying
            to join our group.
          </p>
          <hr className='styled-hr mx-auto my-6' />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {content.eligibile.map((item) => (
              <div className='rounded-xl bg-base-200 p-8 text-left' key={item}>
                <VscDebugBreakpointLog
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2'
                />
                <h3 className='mt-5 font-normal'>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Term and Condition Section */}
      <section id='tc'>
        <div className='layout py-20 text-center'>
          <h2 className='h1 mb-4'>Terms and Conditions</h2>
          <p className='h4 mt-2 font-normal'>
            Please read carefully the terms and conditions that govern our
            community's policies, guidelines, and expectations for members.
          </p>
          <hr className='styled-hr mx-auto my-6' />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {content.tc.map((item) => (
              <div className='rounded-xl bg-base-200 p-8 text-left' key={item}>
                <HiOutlineDocumentText
                  style={{ stroke: 'url(#blue-gradient)' }}
                  className='h2'
                />
                <h3 className='mt-5 font-normal'>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Super25Page;
