import { useState } from 'react';

import Layout, { Testimonials } from '@/components/layout';
import About from '@/components/PageComp/OpenSourcePage/About';
import Header from '@/components/PageComp/OpenSourcePage/Header';
import OurProjects from '@/components/PageComp/OpenSourcePage/OurProjects';

const OpenSourcePage = ({ content }) => {
  const [tweetId, setTweetId] = useState([
    '1537416341245681665',
    '1656911832811184129',
    '1656561217442562051',
    '1656959959450394624',
    '1656141618129547264',
    '1658437060833968129',
    '1655812888387530753',
  ]);

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
