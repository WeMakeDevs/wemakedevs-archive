import Devops from 'assets/courses/devops.jpg';
import DSA from 'assets/courses/dsa.jpg';
import GitGithub from 'assets/courses/git-github.jpg';

import DetailCard from '../../Cards/DetailCard';

const OurProjects = () => {
  return (
    <section id='Ourprojects'>
      <div className='layout py-20'>
        <h1 className='h1 '> Our Projects </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((hashnode) => (
            <DetailCard {...hashnode} key={hashnode.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

const projects = [
  {
    title: 'WMD website',
    description:
      'Our goal is to inspire, educate, and empower the software developer student community to reach their full potential and make a positive impact in the tech industry.      ',
    image: '/assets/ourprojects/wmd.png',
    url: 'https://wemakedevs.org/',
    btnText: 'Learn more',
  },
  {
    title: 'Roadmap runner',
    description:
      'A roadmap is essential for success in software development and provides a clear plan of action to stay focused, measure progress, and make adjustments.',
    image: '/assets/ourprojects/roadmap.png',
    url: 'https://roadmaprunner.vercel.app/',
    btnText: 'Learn more',
  }
];
