import { useState } from 'react';

import { opensourcetweet } from '@/content/opensource';

import Layout, { Testimonials } from '@/components/layout';
import About from '@/components/PageComp/OpenSourcePage/About';
import Header from '@/components/PageComp/OpenSourcePage/Header';
import OurProjects from '@/components/PageComp/OpenSourcePage/OurProjects';

const OpenSourcePage = ({ content }) => {
  const [tweetId, setTweetId] = useState(opensourcetweet);

  return (
    <Layout content={content}>
      <Header />
      <About />
      <OurProjects />
      <Testimonials
        tweetId={tweetId}
        setTweetId={setTweetId}
        title='Open Source Testimonials'
      />
    </Layout>
  );
};

export default OpenSourcePage;
