import Layout from '@/components/layout';
import Header from '@/components/PageComp/OpenSourcePage/Header';
import About from '@/components/PageComp/OpenSourcePage/About';
import { HomePageContent } from './content';
const OpenSource  = () => {
  
  return (
    <Layout content={HomePageContent}>
      <Header />
    </Layout>
  );
};
export default OpenSource;
