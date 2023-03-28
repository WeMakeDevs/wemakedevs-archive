import Layout from '@/components/layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import { HomePageFAQ } from '@/pages/content';

const ErrorPage = () => {
  return (
    <Layout
      content={{
        header: [
          {
            name: 'Home',
            href: '#home',
          },
          {
            name: 'Join',
            href: '#join',
          },
          {
            name: 'FAQ',
            href: '#faq',
          },
          {
            name: 'Links',
            href: '#footer',
          },
        ],
        faq: HomePageFAQ,
      }}
    >
      <section className='grid min-h-screen place-items-center text-content'>
        <div className='w-full max-w-md p-4'>
          <h1 className='font-bold'>404 !</h1>
          <h2 className='mt-2'>Page Not Found</h2>
          <p className='h3 mt-4 mb-6'>
            Unfortunately, the page you are looking for does not exist. Please
            navigate to Home. Thank You
          </p>
          <ArrowLink as={ButtonLink} href='/'>
            Back to home
          </ArrowLink>
        </div>
      </section>
    </Layout>
  );
};

export default ErrorPage;
