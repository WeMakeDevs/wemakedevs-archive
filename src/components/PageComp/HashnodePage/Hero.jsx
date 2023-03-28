import { SiHashnode } from 'react-icons/si';

const Hero = () => {
  return (
    <header className=' bg-[linear-gradient(45deg,rgb(var(--base-100),0.9),rgb(var(--primary),0.9)),url("assets/hashnode/Hashnode.webp")] py-52 pb-48 text-center'>
      <div className='layout flex flex-col items-center justify-center'>
        <h1 className='heading'>
          <span className='highlight highlight--yellow'>WeMakeDevs </span>{' '}
          Blogging Challenge
        </h1>
        <p className='h2 mt-12 font-semibold'>
          Powered by <SiHashnode className='inline-flex' /> hashnode{' '}
        </p>
        <hr className='styled-hr my-4 mb-12 h-2 w-56 bg-orange-500' />
        <p className='h3 font-semibold'>
          Get a chance to win exciting prizes such as{' '}
          <strong>MacBooks, iPhones, iPads and more every month 🤩 </strong>
        </p>
        <p className='h3 mt-3 font-semibold'>
          <span className='highlight highlight--yellow'>Blogging</span> is about
          being yourself and putting what you have into it.
        </p>
      </div>
    </header>
  );
};
export default Hero;
