import Carousel from 'better-react-carousel';
import React, { useEffect, useMemo, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import { eagerLoadTwitterLibrary, Tweet } from 'react-twitter-widgets';

//skeleton component layout wrappers
function InlineWrapperWithMargin({ children }) {
  return <span className='mx-3'>{children}</span>;
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
            responsiveLayout={[
              {
                breakpoint: 1380,
                cols: 2,
                gap: 5,
              },
              {
                breakpoint: 640,
                cols: 1,
                gap: 10,
              },
            ]}
          >
            {tweetId?.map((id) => (
              <Carousel.Item key={id}>
                {/* normally width is set to 95% | for screens <= 640px width=90% | for screens <= 370px width=85% */}
                <div className='w-[95%] max-sm:w-[90%] max-xsm:w-[85%]'>
                  <Tweet
                    tweetId={id}
                    options={{
                      theme: 'dark',
                      conversation: 'none',
                      align: 'center',
                    }}
                    onLoad={() => {
                      setHideTweetPost(false);
                    }}
                    renderError={() => {
                      setHide(id);
                      return <div style={{ display: 'none' }}></div>;
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default TweetCarousael;
