const Benefits = ({ content }) => {
  return (
    <section id='benefits'>
      <div className='layout py-20 text-center'>
        <h2 className='h1 mb-4'>Benefits</h2>
        <p className='h4 mt-2 font-normal'>
          Level up your career with our exclusive series of events
        </p>
        <hr className='styled-hr mx-auto my-6' />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2'>
          {content.benefits.map((item, i) => (
            <div
              className='flex flex-col rounded-xl bg-base-200 p-8 text-left'
              key={i}
            >
              <h3 style={{ fill: 'url(#blue-gradient)' }} className='h2'>
                {item.icon}
              </h3>
              <h3 className='mt-5 mb-2 font-semibold'>{item.title}</h3>
              <h3 className='text-base font-normal'>{item.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
