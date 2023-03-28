import Devops from 'assets/courses/devops.jpg';
import DSA from 'assets/courses/dsa.jpg';
import GitGithub from 'assets/courses/git-github.jpg';

import DetailCard from '../../Cards/DetailCard';

const Courses = () => {
  return (
    <section id='courses'>
      <div className='layout py-20'>
        <h1 className='h1 '> Courses </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {courses.map((hashnode) => (
            <DetailCard {...hashnode} key={hashnode.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

const courses = [
  {
    title: 'Data Structures & Algorithms in Java',
    description:
      'Get interview-ready with this course that has no prerequisites and is designed to make you an expert in solving easy to hard LeetCode problems with ease.      ',
    image: DSA,
    url: '/courses/dsa',
    btnText: 'Learn more',
  },
  {
    title: 'Git & GitHub',
    description:
      'Kick-off your Open Source journey with the complete Git & GitHub tutorial covering all the fundamentals and advance concepts with a hands-on approach.',
    image: GitGithub,
    url: '/courses/git-github',
    btnText: 'Learn more',
  },
  {
    title: 'DevOps',
    description:
      'Without a doubt, DevOps engineer is the most in-demand role in the current market, especially with an increased number of high paying remote opportunities.',
    image: Devops,
    url: '/courses/devops',
    btnText: 'Learn more',
  },
];
