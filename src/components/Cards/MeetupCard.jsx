import { BsCalendar, BsClock } from 'react-icons/bs';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const MeetupCard = ({ img, title, on, description, slug }) => {
  return (
    <div className='overflow-hidden rounded-lg border border-content/50 bg-gradient-to-br from-transparent to-base-100/50'>
      <img src={img || ''} alt={title + 'banner'} />
      <div className='p-6'>
        <h3>{title}</h3>
        <p
          style={{
            marginTop: '1.3rem',
          }}
        >
          {description}
        </p>
        <p
          style={{
            marginTop: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
          }}
          className='h3'
        >
          <BsCalendar /> {new Date(on).toDateString()}
        </p>
        <p
          style={{
            marginTop: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
          }}
          className='h3'
        >
          <BsClock /> {new Date(on).toLocaleTimeString()}{' '}
          {/\((.*)\)/
            .exec(new Date(on).toString())[1]
            .split(' ')
            .map((i) => i[0].toUpperCase())
            .join('')}
        </p>
        <ArrowLink
          as={ButtonLink}
          className='mt-4'
          href={`/events/meetups/${slug}`}
          openNewTab
        >
          {new Date().getTime() < new Date(on).getTime() ? 'Register' : 'Recap'}
        </ArrowLink>
      </div>
    </div>
  );
};

export default MeetupCard;
