import { BsCalendar, BsClock } from 'react-icons/bs';

import { getTime, getTimeZone } from '@/lib/utils';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const WebinarCard = ({ img, title, time, description, slug }) => {
  return (
    <div className='overflow-hidden rounded-2xl bg-content/5 p-4'>
      <img
        src={img}
        alt={title + 'banner'}
        className='aspect-video w-full rounded-lg object-cover object-center'
      />
      <div className='pt-6 pb-3'>
        <h3 className='mb-5 line-clamp-2'>{title}</h3>
        <p className='line-clamp-3'>{description}</p>
        <p className='h3 mt-5 flex items-center gap-2'>
          <BsCalendar /> {new Date(time).toDateString()}
        </p>
        <p className='h3 mt-5 flex items-center gap-2'>
          <BsClock />
          {getTime(time)} {getTimeZone(time)}
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
