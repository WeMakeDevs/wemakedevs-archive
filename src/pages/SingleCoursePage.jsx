import { useState } from 'react';

import Layout, { Testimonials } from '@/components/layout';
import { About, Syllabus } from '@/components/PageComp/SingleCoursePage';

const CoursesPage = ({ content }) => {
  const [tweetId, setTweetId] = useState(content.content.tweetId);
  return (
    <Layout content={content}>
      <About content={content.content} />
      {tweetId ? (
        <Testimonials tweetId={tweetId} setTweetId={setTweetId} />
      ) : (
        <>
          <Testimonials content={content.content.testimonials} />
        </>
      )}
      {content.content.syllabus.length > 0 && (
        <Syllabus content={content.content} />
      )}
    </Layout>
  );
};
export default CoursesPage;
