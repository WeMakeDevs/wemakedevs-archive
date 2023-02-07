import Layout, { Testimonials } from '../components/layout';
import ScrollToTop from '../components/ScrollToTop';
import { About, Syllabus } from '../components/SingleCoursePage';


const CoursesPage = ({ content }) => {
  return (
    <>
      <Layout content={content}>
        <About content={content.content} />
        <Testimonials tweetId={content.content.tweetId} />
        {content.content.syllabus.length > 0 && (
          <Syllabus content={content.content} />
        )}
      </Layout>
      <ScrollToTop />
    </>
  );
};
export default CoursesPage;
