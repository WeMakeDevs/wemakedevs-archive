import { HomePageContent } from './content';
import {
  About,
  Content,
  Courses,
  Events,
  Hero,
  Mentorship,
} from '../components/home';
import {
  Banner,
  FAQ,
  Footer,
  JoinUs,
  Navbar,
  Partner,
  PartnerTestimonials,
} from '../components/layout';

const HomePage = () => {
  return (
    <>
      <Navbar links={HomePageContent.header} />
      <Hero />
      <About background='gradient' />
      <Courses />
      <Mentorship background='gradient' />
      <Events />
      <Content background='gradient' />
      <JoinUs />
      <FAQ background='gradient' faq={HomePageContent.faq} />
      <Partner />
      <PartnerTestimonials />
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
