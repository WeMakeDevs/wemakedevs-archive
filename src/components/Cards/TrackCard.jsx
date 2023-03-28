const TrackCard = ({ image, title, description }) => {
  return (
    <div className='overflow-hidden rounded-lg border border-content/50 bg-gradient-to-br from-transparent to-base-100/50'>
      <img
        src={image}
        className='aspect-[1145/720] w-full object-cover object-center'
        alt={title + 'banner'}
      />
      <div className='p-6'>
        <h3>{title}</h3>
        <p className='mt-2'>{description}</p>
      </div>
    </div>
  );
};

export default TrackCard;
