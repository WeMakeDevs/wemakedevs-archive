import Layout, { Testimonials } from '@/components/layout';
import { About, Courses, Hero } from '@/components/PageComp/CoursesPage';

const CoursesPage = ({ content }) => {
  return (
    <Layout content={content}>
      <Hero />
      <About />
      <Courses />
      <Testimonials
        tweetId={[
          '1620824479395090435',
          '1620081639199244288',
          '1620489706994806785',
          '1620828035804184579',
          '1617535692497883138',
          '1487399069383155716',
          '1544248976664567811',
        ]}
      />
    </Layout>
  );
};
export default CoursesPage;
