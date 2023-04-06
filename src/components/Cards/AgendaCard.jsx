import clsxm, { getTime } from '@/lib/utils';

const AgendaCard = ({ description, title, start, end, speaker, id }) => {
  return (
    <>
      <li className={clsxm(id % 2 === 0 ? 'hidden' : 'hidden lg:block')} />
      <li
        className={clsxm(
          'relative py-2 px-10',
          'after:absolute after:top-0 after:h-full after:w-2 after:bg-base-200',
          id % 2 === 0
            ? 'after:left-0 after:-translate-x-1/2 lg:after:right-0 lg:after:left-auto lg:after:translate-x-1/2'
            : 'after:left-0 after:-translate-x-1/2'
        )}
      >
        <span
          className={clsxm(
            'absolute top-1/2 z-10 aspect-square w-5 -translate-y-1/2 rounded-full bg-primary',
            id % 2 === 0
              ? 'left-0 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-1/2'
              : 'left-0 -translate-x-1/2'
          )}
        />
        <span
          className={clsxm(
            'absolute top-1/2 w-0 -translate-y-1/2 border-[10px] border-transparent',
            id % 2 === 0
              ? 'left-10 -translate-x-full border-r-white/10 lg:right-10 lg:left-auto lg:translate-x-full lg:border-l-white/10 lg:border-r-white/0'
              : 'left-10 -translate-x-full border-r-white/10'
          )}
        />
        <div className='flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-6 shadow-lg'>
          <h3 className='h2'>{title}</h3>
          <div className='h3'>
            {getTime(start)} - {getTime(end)}
          </div>
          <div className='h3'>{speaker}</div>
          <div className='h3'>{description}</div>
        </div>
      </li>
      <li className={clsxm(id % 2 !== 0 ? 'hidden' : 'hidden lg:block')} />
    </>
  );
};

export default AgendaCard;
