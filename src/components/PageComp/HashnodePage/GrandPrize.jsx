import Hashnode from 'assets/hashnode/Special-Prize.png';

const GrandPrize = () => {
  return (
    <section id='sec-prize'>
      <div className='layout flex flex-col items-center justify-center  gap-6 py-20 text-center'>
        <h1 className='h1'> Current event & prize </h1>
        <hr className='styled-hr' />
        <img
          className='aspect-[1562/1207] w-full max-w-2xl overflow-hidden rounded-2xl border-2 border-content'
          src={Hashnode}
          alt='Hashnode blogging challenge special prize'
        />
      </div>
    </section>
  );
};

export default GrandPrize;
