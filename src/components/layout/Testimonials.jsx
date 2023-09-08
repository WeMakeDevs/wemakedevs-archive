import Carousel from 'better-react-carousel';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import clsxm from '@/lib/utils';

import TestimonialCard from '@/components/Cards/TestimonialCard';
import { ArrowLink, ButtonLink } from '@/components/links';
import TweetCarousael from '@/components/TweetCarousael';

const Testimonials = ({
  title = 'Testimonials',
  tweetId,
  as = 'section',
  className,
  setTweetId,
  content,
  btnText,
  btnLink,
}) => {
  const Compoonent = as || 'section';
  return (
    <Compoonent id='testimonials'>
      <div
        className={clsxm(
          'layout flex flex-col items-center justify-center gap-6 py-20',
          className
        )}
      >
        <h2 className='h1'>{title}</h2>
        <hr className='styled-hr' />

        {tweetId ? (
          <TweetCarousael tweetId={tweetId} setTweetId={setTweetId} />
        ) : (
          <div className='flex flex-col gap-4'>
            <Carousel
              cols={3}
              rows={1}
              gap={20}
              autoplay={2500}
              dotColorActive='rgb(89,66,233)'
              arrowRight={
                <AiFillRightCircle
                  size={50}
                  className='absolute top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black text-2xl text-indigo-600'
                />
              }
              arrowLeft={
                <AiFillLeftCircle
                  size={50}
                  className='absolute top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black text-2xl text-indigo-600'
                />
              }
              showDots
              loop
            >
              {content?.map((item) => (
                <Carousel.Item key={item.from}>
                  <TestimonialCard {...item} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
        <div className='mt-4 flex gap-2'>
          {btnLink && (
            <ArrowLink openNewTab as={ButtonLink} href={btnLink}>
              {btnText}
            </ArrowLink>
          )}
        </div>
      </div>
    </Compoonent>
  );
};

export default Testimonials;
