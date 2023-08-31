const TrackCard = ({ image, title, description }) => {
  return (
    <div className='overflow-hidden rounded-2xl bg-content/5 p-4'>
      <img
        src={image}
        className='aspect-[1145/720] w-full rounded-lg object-cover object-center'
        alt={title + 'banner'}
      />
      <div className='pt-6 pb-3'>
        <h3>{title}</h3>
        <p className='mt-2'>{description}</p>
      </div>
    </div>
  );
};

export default TrackCard;
