import { BsCalendar, BsClock } from 'react-icons/bs';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const MeetupCard = ({ img, title, on, description, slug, link }) => {
  return (
    <div className='overflow-hidden rounded-2xl bg-content/5 p-4'>
      <img
        src={img || ''}
        alt={title + 'banner'}
        className='aspect-video w-full rounded-lg object-cover object-center'
      />
      <div className='pt-6 pb-3'>
        <h3>{title}</h3>
        <p className='mt-2'>{description}</p>
        <p className='h3 mt-4 flex items-center gap-2'>
          <BsCalendar /> {new Date(on).toDateString()}
        </p>
        <p className='h3 mt-4 flex items-center gap-2'>
          <BsClock /> {new Date(on).toLocaleTimeString()}{' '}
          {/\((.*)\)/
            .exec(new Date(on).toString())[1]
            .split(' ')
            .map((i) => i[0].toUpperCase())
            .join('')}
        </p>
        {slug && (
          <ArrowLink
            as={ButtonLink}
            className='mt-4'
            href={`/events/meetups/${slug}`}
            openNewTab
          >
            {new Date().getTime() < new Date(on).getTime()
              ? 'Register'
              : 'Recap'}
          </ArrowLink>
        )}
        {link && (
          <ArrowLink as={ButtonLink} className='mt-4' href={link} openNewTab>
            Learn more
          </ArrowLink>
        )}
      </div>
    </div>
  );
};

export default MeetupCard;
