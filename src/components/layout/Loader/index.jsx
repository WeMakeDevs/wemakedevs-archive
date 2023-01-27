import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '4rem',
      }}
    >
      <AiOutlineLoading className='animate-rotate' />
    </section>
  );
};

export default Loader;
