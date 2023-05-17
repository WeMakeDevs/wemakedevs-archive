import { AiOutlineCalendar } from 'react-icons/ai';

import { ArrowLink, ButtonLink } from '@/components/links';

const TimeLineCard = ({ title, date, isLink, onlyDate, end }) => {
  return (
    <li className='relative flex w-full gap-5 md:max-w-[20rem] md:flex-col'>
      <div className='flex items-center'>
        <AiOutlineCalendar className='h3 h-14 w-14 shrink-0 rounded-full bg-primary p-3' />
        <div className='h-0.5 w-full bg-white/50 md:flex'></div>
      </div>
      <div className='mt-3 sm:pr-8'>
        <h3 className='font-semibold'>{title}</h3>
        {isLink ? (
          <ArrowLink
            className='mt-2 rounded-md py-2 px-4 text-sm'
            as={ButtonLink}
            href={date}
          >
            Youtube
          </ArrowLink>
        ) : (
          <time className='h4 mb-2 block leading-none text-white/70'>
            {new Date(date).toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}{' '}
            {!onlyDate && (
              <>
                {new Date(date).toLocaleTimeString('en-US', {
                  timeStyle: 'short',
                })}{' '}
                {end && (
                  <>
                    {' - '}
                    {new Date(end).toLocaleTimeString('en-US', {
                      timeStyle: 'short',
                    })}{' '}
                  </>
                )}
                {/\((.*)\)/
                  .exec(new Date(date).toString())[1]
                  .split(' ')
                  .map((i) => i[0].toUpperCase())
                  .join('')}{' '}
              </>
            )}
          </time>
        )}
      </div>
    </li>
  );
};

export default TimeLineCard;
