import BannerImage from 'assets/home/newblogimage.jpg';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import ListItem from '@/components/Listitem';

const Content = () => {
  return (
    <section id='content'>
      <div className='layout mx-auto py-20'>
        <div>
          <h2 className='h1'>Newsroom</h2>
          <hr className='styled-hr my-6' />
        </div>
        <div className='flex flex-wrap gap-4'>
          <Card
            title='Podcast'
            href='https://www.youtube.com/playlist?list=PL9gnSGHSqcnoCAy9zpT24v1N6RzWaR-HK'
            src='https://www.youtube.com/embed/t8w-e7yJgiA'
            isVideo
            btnText='Listen podcast'
          >
            <ListItem as='p' className='h3'>
              The Open Source Cafe is an initiative to highlight the stories,
              journeys, tips & tricks of some of the amazing community leaders
              and members.
            </ListItem>
            <ListItem as='p' className='h3'>
              Learn from the experiences of industry expert, and get mentored
              from folks around the globe.
            </ListItem>
            <ListItem as='p' className='h3'>
              Grow your skills to the next level by gather tricks and tips from
              folks who have made it.
            </ListItem>
          </Card>
          <Card
            title='Blogs'
            href='https://blog.wemakedevs.org'
            src={BannerImage}
            btnText='Read and learn'
          >
            <ListItem as='p' className='h3'>
              <span className='highlight'>KubeLetter</span> - We invite you to
              check out our kubeletters, where we provide updates and insights
              on all about cloud native.
            </ListItem>
            <ListItem as='p' className='h3'>
              <span className='highlight'>Case Studies</span> - Our case studies
              feature real-world use cases and the influence of various
              technologies on enterprises.
            </ListItem>
            <ListItem as='p' className='h3'>
              <span className='highlight'>Tutorials</span> - Here, you'll find a
              variety of in-depth guides and resources to help you learn new
              skills and technologies.
            </ListItem>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Content;

const Card = ({ src, title, href, btnText, children, isVideo }) => {
  return (
    <div className='overflow-hidden rounded-lg border border-content/20 bg-base-100/50 lg:flex-1'>
      {isVideo ? (
        <iframe
          src={src}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='borcer-0 inline-block aspect-[560/315] w-full object-cover object-center'
        ></iframe>
      ) : (
        <img
          alt='blog'
          className='borcer-0 inline-block aspect-[560/315] w-full object-cover object-center'
          src={src}
        />
      )}
      <div className='flex flex-col gap-5 p-5 lg:p-10'>
        <h2 className='h3'>{title}</h2>
        {children}
        <ArrowLink as={ButtonLink} className='mt-2' href={href}>
          {btnText}
        </ArrowLink>
      </div>
    </div>
  );
};
