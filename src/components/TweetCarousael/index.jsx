import Carousel from 'better-react-carousel';
import React, { useEffect, useMemo, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import { eagerLoadTwitterLibrary, Tweet } from 'react-twitter-widgets';

//skeleton component layout wrappers
function InlineWrapperWithMargin({ children }) {
  return (
    <span
      style={{
        marginRight: '1.2rem',
        marginLeft: '1.2rem',
      }}
    >
      {children}
    </span>
  );
}

function TweetCarousael({ tweetId, setTweetId }) {
  const [hide, setHide] = useState('0');
  const [hideTweetPost, setHideTweetPost] = useState(true);
  useEffect(() => {
    //Add the lazy loading in the tweet cards
    eagerLoadTwitterLibrary();
  }, []);
  useMemo(() => {
    if (tweetId.includes(hide)) {
      setTweetId(tweetId.filter((str) => str !== hide));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hide]);
  return (
    <React.Fragment>
      {hideTweetPost ? (
        <div className='layout'>
          <Skeleton
            count={3}
            wrapper={InlineWrapperWithMargin}
            inline
            width='30%'
            height='50vh'
            baseColor='#15202b'
            highlightColor='#6555cc'
            borderRadius='0.5rem'
          />
        </div>
      ) : null}
      {tweetId?.length !== 0 ? (
        <div
          className='w-full'
          style={{
            opacity: hideTweetPost ? '0' : '1',
          }}
        >
          <Carousel
            cols={3}
            rows={1}
            gap={10}
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
            {tweetId?.map((id) => (
              <Carousel.Item
                style={{
                  width: '99%',
                }}
                key={id}
              >
                <Tweet
                  tweetId={id}
                  options={{ theme: 'dark', conversation: 'none' }}
                  onLoad={() => {
                    setHideTweetPost(false);
                  }}
                  renderError={() => {
                    setHide(id);
                    return <div style={{ display: 'none' }}></div>;
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default TweetCarousael;
