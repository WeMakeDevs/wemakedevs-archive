import Layout from '@/components/layout';

import Header from '@/components/PageComp/OpenSourcePage/Header';
import About  from '@/components/PageComp/OpenSourcePage/About';

import OurProjects from '@/components/PageComp/OpenSourcePage/OurProjects';

const OpenSourcePage = ({ content }) => {
  return (
    <Layout content={content}>
     <Header />
     <About />

     <OurProjects />

    </Layout>
  );
};

export default OpenSourcePage;
