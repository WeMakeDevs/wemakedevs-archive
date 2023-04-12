import { UnstyledLink } from '@/components/links';
const SponserCard = ({ src, name, url }) => {
  return (
    <UnstyledLink href={url}>
      <li className='flex h-full w-full max-w-[12rem] shrink-0 items-center justify-center rounded-lg border-2 border-white bg-white  p-3'>
        <img
          className='relative mx-auto aspect-video w-full max-w-[9rem] object-contain'
          src={src}
          alt={name}
        />
        <p className='h3 mt-2'>{name}</p>
      </li>
    </UnstyledLink>
  );
};

export default SponserCard;
