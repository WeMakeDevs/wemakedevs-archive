import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
  return (
    <section className='h3 flex h-screen w-screen items-center justify-center bg-black text-white'>
      <AiOutlineLoading className='animate-rotate' />
    </section>
  );
};

export default Loader;
