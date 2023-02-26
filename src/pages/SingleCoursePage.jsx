import Layout, { Testimonials } from '@/components/layout';
import { About, Syllabus } from '@/components/SingleCoursePage';

const CoursesPage = ({ content }) => {
  return (
    <Layout content={content}>
      <About content={content.content} />
      <Testimonials tweetId={content.content.tweetId} />
      {content.content.syllabus.length > 0 && (
        <Syllabus content={content.content} />
      )}
    </Layout>
  );
};
export default CoursesPage;
