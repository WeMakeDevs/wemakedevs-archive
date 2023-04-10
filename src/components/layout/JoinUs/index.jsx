import clsx from 'clsx';
import { FaDiscord, FaTelegram } from 'react-icons/fa';

import clsxm from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

import NewsLetter from './NewsLetter';

function JoinUs() {
  return (
    <section id='join' className='py-20'>
      <div className='layout flex flex-col lg:flex-row'>
        {/* Join section */}
        <div className='flex flex-1 flex-col items-center gap-4'>
          <h2 className='h1'>Join us</h2>
          <hr className='styled-hr' />
          <div className='mt-8 flex flex-col justify-center gap-6'>
            {data.map((item) => (
              <JoinUsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
        <NewsLetter />
      </div>
    </section>
  );
}

export default JoinUs;

const JoinUsCard = ({ title, href, description, icon }) => {
  return (
    <UnstyledLink
      href={href}
      className='group relative flex max-w-sm justify-between'
    >
      <div className='relative'>
        {/* Face one */}
        <div
          className={clsx(
            'h-[200px] w-[300px] overflow-hidden transition-all duration-500',
            'relative z-10 flex items-center justify-center rounded-t-2xl bg-base-100',
            'lg:rounded-2xl lg:group-hover:rounded-none lg:group-hover:rounded-t-2xl'
          )}
        >
          <div
            className={clsxm(
              'absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center',
              'bg-gradient-to-br from-primary-hover/30 to-primary',
              'transition-all duration-700'
            )}
          >
            {icon}
          </div>
        </div>
        {/* Face two */}
        <div
          className={clsx(
            'h-[200px] w-[300px] overflow-hidden rounded-2xl transition-all duration-500',
            'relative flex flex-col items-center justify-center rounded-b-2xl bg-content/10 p-5',
            'text-center text-2xl font-bold capitalize text-white',
            'lg:h-0 lg:rounded-2xl lg:py-0 lg:group-hover:h-[200px] lg:group-hover:rounded-t-none lg:group-hover:py-5'
          )}
        >
          <h3 className='h2'>{title}</h3>
          <p className='h4 font-medium'>{description}</p>
        </div>
      </div>
    </UnstyledLink>
  );
};

const data = [
  {
    title: 'discord',
    href: 'https://discord.gg/wemakedevs',
    description: 'Join the community of 56k+ folks',
    icon: <FaDiscord color='white' size='100' />,
  },
  {
    title: 'telegram',
    href: 'https://t.me/WeMakeDevs',
    description: 'Stay up-to-date with news and announcements',
    icon: <FaTelegram color='white' size='100' />,
  },
];
