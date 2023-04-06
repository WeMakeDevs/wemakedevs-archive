const SponserCard = ({ src, name }) => {
  return (
    <li className='w-full max-w-[12rem] shrink-0 rounded-lg border-2  border-base-200 bg-content/20 p-3'>
      <img
        className='relative mx-auto aspect-video w-full max-w-[7rem] object-contain'
        src={src}
        alt={name}
      />
      <p className='h3 mt-2'>{name}</p>
    </li>
  );
};

export default SponserCard;
