const OngoingEvents = () => {
  return (
    <section id='ongoing'>
      <div className='layout py-20'>
        <h1 className='h1'> Ongoing events </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <p>There no upcoming hackathons right now</p>
        </div>
      </div>
    </section>
  );
};

export default OngoingEvents;
