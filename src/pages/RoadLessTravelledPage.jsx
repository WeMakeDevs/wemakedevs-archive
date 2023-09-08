import { useState } from 'react';

import { RoadLessTravelledTweets } from '@/content/roadlesstravelled';

import Layout, { Testimonials } from '@/components/layout';
import {
  About,
  Benefits,
  Hero,
  Register,
} from '@/components/PageComp/RoadLessTravelled';
import { LearnInPublic } from '@/components/PageComp/RoadLessTravelled';

const RoadLessTravelledPage = ({ content }) => {
  const [tweetId, setTweetId] = useState(RoadLessTravelledTweets);

  return (
    <Layout content={content}>
      {/* Hero */}
      <Hero content={content} />
      {/* About */}
      <About content={content} />

      {/* Benefits */}
      <Benefits content={content} />

      {/* Testimonials */}
      <Testimonials
        tweetId={tweetId}
        setTweetId={setTweetId}
        title='Testimonials'
      />

      {/* Learn In Public */}
      <LearnInPublic />

      {/* Register Section */}
      <Register careerpath={content.slug} />
    </Layout>
  );
};

export default RoadLessTravelledPage;
