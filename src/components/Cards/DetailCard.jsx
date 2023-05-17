import { FaGithub } from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const DetailCard = ({ image, title, description, url, btnText, git }) => {
  return (
    <div className='overflow-hidden rounded-lg border border-content/50 bg-gradient-to-br from-transparent to-base-100/50'>
      <img
        src={image}
        className='aspect-video w-full object-cover object-center'
        alt={title + 'banner'}
      />
      <div className='p-6'>
        <h3>{title}</h3>
        <p className='mt-2'>{description}</p>
        <div className='mt-4 flex gap-2'>
          {url && (
            <ArrowLink as={ButtonLink} href={url}>
              {btnText}
            </ArrowLink>
          )}
          {git && (
            <ButtonLink href={git} className='px-4'>
              <FaGithub />
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
