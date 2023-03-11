import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
  return (
    <section className='h1 flex h-screen w-screen items-center justify-center bg-black text-white'>
      <AiOutlineLoading className='animate-spin' />
    </section>
  );
};

export default Loader;
