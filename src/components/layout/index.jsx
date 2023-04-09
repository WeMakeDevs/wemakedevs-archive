import Backdrop from './Backdrop';
import Banner from './Banner';
import ColumnSection from './ColumnSection';
import Faq from './Faq';
import Footer from './Footer';
import JoinUs from './JoinUs';
import Loader from './Loader';
import Navbar from './Navbar';
import Partner from './Partner';
import Testimonials from './Testimonials';

export {
  Backdrop,
  Banner,
  ColumnSection,
  Faq as FAQ,
  Footer,
  JoinUs,
  Loader,
  Navbar,
  Partner,
  Testimonials,
};

const Layout = ({ content, children }) => {
  return (
    <>
      <Navbar links={content.header} cta={content.CTA} />
      <main className='main'>
        {children}
        <JoinUs />
        <Faq faq={content.faq} />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
