import { EventsPageContent } from './content';
import { About, Hero, Prize, Track } from '../components/eventspage';
import { FAQ, Footer, JoinUs, Navbar, Partner } from '../components/layout';

const EventsPage = () => {
  return (
    <>
      <Navbar links={EventsPageContent.header} />
      <Hero />
      <About background='gradient' />
      <Prize />
      <Track background='gradient' />
      <JoinUs />
      <FAQ background='gradient' faq={EventsPageContent.faq} />
      <Partner />
      <Footer />
    </>
  );
};
export default EventsPage;
