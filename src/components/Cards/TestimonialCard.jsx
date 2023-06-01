const TestimonialCard = ({ src, description, from }) => {
  return (
    <div className='mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1'>
      <img
        alt='testimonial'
        className=' mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center'
        src={src}
      />
      <p className='text-lg'>{description}</p>
      <hr className='styled-hr styled-hr--light mx-auto my-4' />
      <h2 className='text-sm font-medium text-content '>{from}</h2>
    </div>
  );
};

export default TestimonialCard;
