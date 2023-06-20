import { useState } from 'react';

import testimonialTweets from '@/content/testimonials';

import { Testimonials } from '@/components/layout';

const EducationalTestimonials = () => {
  const [tweetId, setTweetId] = useState(testimonialTweets);
  return (
    <section id='sec-testimonials'>
      <div className='layout py-20'>
        <Testimonials
          as='div'
          tweetId={tweetId}
          setTweetId={setTweetId}
          title='Testimonials'
          className='pt-0'
        />
      </div>
    </section>
  );
};

export default EducationalTestimonials;
