import { BsLinkedin, BsTwitter } from 'react-icons/bs';

import UnstyledLink from '@/components/links/UnstyledLink';

const SpeakerCard = ({ img, name, description, linkedin, twitter }) => {
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden rounded-lg border border-content/50 bg-base-200  px-2 py-10 text-center'>
      {img && (
        <img
          src={img}
          alt={name + ' profile'}
          className='block aspect-square w-60 rounded-full xl:w-52'
        />
      )}

      <h3 className='h2 mt-4'>{name}</h3>
      <p className='h3 mt-3'>{description}</p>
      {twitter && (
        <UnstyledLink
          className='h3 mt-4 flex items-center justify-center gap-4'
          href={`https://twitter.com/${twitter}`}
        >
          <BsTwitter /> @{twitter}
        </UnstyledLink>
      )}
      {linkedin && (
        <UnstyledLink
          className='h3 mt-4 flex items-center justify-center gap-4'
          href={`https://www.linkedin.com/in/${linkedin}`}
        >
          <BsLinkedin /> LinkedIn
        </UnstyledLink>
      )}
    </div>
  );
};

export default SpeakerCard;
