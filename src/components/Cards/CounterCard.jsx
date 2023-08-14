import CountUp from 'react-countup';

const CounterCard = ({ icon: Icon, number, title, prefix = '' }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1 rounded-lg border border-content/20 bg-base-100/10 bg-gradient-to-r from-transparent to-base-100/50 p-4 py-10 text-center'>
      <div className='h1 flex items-center justify-center rounded-full border border-primary bg-primary p-4'>
        <Icon />
      </div>
      <div className='h2 mt-2'>
        <CountUp
          enableScrollSpy
          prefix={prefix}
          start={0}
          end={number}
          duration={2}
          delay={0}
          suffix='+'
          separator=','
        />
      </div>
      <div className='h3'>{title}</div>
    </div>
  );
};

export default CounterCard;
