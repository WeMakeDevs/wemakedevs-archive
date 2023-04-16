import Layout from '@/components/layout';

import Header from '@/components/PageComp/OpenSourcePage/Header';
import About  from '@/components/PageComp/OpenSourcePage/About';
const OpenSourcePage = ({ content }) => {
  return (
    <Layout content={content}>
     <Header />
     <About />

    </Layout>
  );
};

export default OpenSourcePage;
