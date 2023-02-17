import Carousel from 'better-react-carousel';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { eagerLoadTwitterLibrary, Tweet } from 'react-twitter-widgets';

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
function SkeletonCard({ tweetId, options }) {
  const [hideTweetPost, setHideTweetPost] = useState(true);
  useEffect(() => {
    eagerLoadTwitterLibrary();
  }, []);
  return (
    <div>
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
      <div
        className='layout'
        style={{
          paddingBottom: '5rem',
          opacity: hideTweetPost ? '0' : '1',
        }}
      >
        <Carousel
          cols={3}
          rows={1}
          gap={20}
          autoplay={2500}
          dotColorActive='rgb(89,66,233)'
          showDots
          hideArrow
          loop
        >
          {tweetId.map((id) => (
            <Carousel.Item
              style={{
                width: '99%',
              }}
              key={id}
            >
              <Tweet
                tweetId={id}
                options={options}
                onLoad={() => setHideTweetPost(false)}
                renderError={() => alert('Tweeter info not found!!!')}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SkeletonCard;
