import Backdrop from './Backdrop';
import Banner from './Banner';
import ColumnSection from './ColumnSection';
import FAQ from './FAQ';
import Footer from './Footer';
import JoinUs from './JoinUs';
import Loader from './Loader';
import Navbar from './Navbar';
import Partner from './Partner';
import HeaderLink from '../links/HeaderLink';

export {
  Backdrop,
  Banner,
  ColumnSection,
  FAQ,
  Footer,
  HeaderLink,
  JoinUs,
  Loader,
  Navbar,
  Partner,
};

const Layout = ({ content, children }) => {
  return (
    <>
      <Navbar links={content.header} />
      <main className='main'>
        {children}
        <JoinUs />
        <FAQ faq={content.faq} />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
