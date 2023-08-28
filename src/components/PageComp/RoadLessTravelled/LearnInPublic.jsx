import { MdOutlineLabelImportant } from 'react-icons/md';

import { HeaderLink } from '@/components/links';

const LearnInPublic = () => {
  const handleClick = () => {
    const twitterUrl =
      'https://twitter.com/intent/tweet?text=%RoadLessTravelled';
    window.open(twitterUrl, '_blank');
  };

  const handleClick1 = () => {
    const twitterUrl = 'https://twitter.com/WeMakeDevs';
    window.open(twitterUrl, '_blank');
  };

  const handleClick2 = () => {
    const twitterUrl = 'https://twitter.com/hashnode';
    window.open(twitterUrl, '_blank');
  };

  return (
    <section id='learninpublic' className='overflow-x-hidden'>
      <div className='layout py-20 text-center'>
        <h2 className='h1'>Learn in public</h2>
        <p className='h4 mt-2 font-normal'>
          Share your journey and grow as a developer
        </p>
        <hr className='styled-hr mx-auto my-6' />

        <ul className='mx-auto max-w-5xl space-y-5'>
          <li className='h3 flex w-full gap-3 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'>
            <MdOutlineLabelImportant
              style={{ fill: 'url(#blue-gradient)' }}
              className='h2 inline-block text-primary'
            />
            <span>
              Use{' '}
              <button
                className='relative bg-purple-700/50'
                onClick={handleClick}
              >
                #RoadLessTravelled
              </button>{' '}
              on Twitter and share your journey regularly
            </span>
          </li>
          <li className='h3 flex w-full gap-3 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'>
            <MdOutlineLabelImportant
              style={{ fill: 'url(#blue-gradient)' }}
              className='h2 inline-block text-primary'
            />
            <span>
              Follow{' '}
              <button
                className='relative bg-purple-700/50'
                onClick={handleClick1}
              >
                @WeMakeDevs
              </button>{' '}
              and{' '}
              <button
                className='relative bg-purple-700/50'
                onClick={handleClick2}
              >
                @hashnode
              </button>{' '}
              on Twitter to stay updated
            </span>
          </li>
          <li className='h3 flex w-full gap-3 rounded-xl bg-base-200 py-6 px-4 text-left font-medium'>
            <MdOutlineLabelImportant
              style={{ fill: 'url(#blue-gradient)' }}
              className='h2 inline-block text-primary'
            />
            <span>
              There will be a{' '}
              <HeaderLink
                openNewTab
                className='text-indigo-300 after:h-[2px] after:bg-white'
                href='/events/hashnode'
              >
                blogging challenge
              </HeaderLink>{' '}
              along with this where you can win exciting prizes.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LearnInPublic;
