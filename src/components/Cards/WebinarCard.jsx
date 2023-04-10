import { BsCalendar, BsClock } from 'react-icons/bs';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const WebinarCard = ({ img, title, time, description, slug }) => {
  return (
    <div className='overflow-hidden rounded-lg border border-content/50 bg-gradient-to-br from-transparent to-base-100/50'>
      <img src={img} alt={title + 'banner'} />
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
          <BsCalendar /> {new Date(time).toDateString()}
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
          <BsClock /> {new Date(time).toLocaleTimeString()}{' '}
          {/\((.*)\)/
            .exec(new Date(time).toString())[1]
            .split(' ')
            .map((i) => i[0].toUpperCase())
            .join('')}
        </p>
        <ArrowLink
          as={ButtonLink}
          className='mt-4'
          href={`/events/webinars/${slug}`}
          openNewTab
        >
          {new Date().getTime() < new Date(time).getTime()
            ? 'Register'
            : 'Recap'}
        </ArrowLink>
      </div>
    </div>
  );
};

export default WebinarCard;
