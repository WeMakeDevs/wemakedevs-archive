import { FaGithub } from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const DetailCard = ({ image, title, description, url, btnText, git }) => {
  return (
    <div className='overflow-hidden rounded-2xl bg-content/5 p-4'>
      <img
        src={image}
        className='aspect-video w-full rounded-lg object-cover object-center'
        alt={title + 'banner'}
      />
      <div className='pt-6 pb-3'>
        <h3>{title}</h3>
        <p className='mt-2'>{description}</p>
        <div className='mt-4 flex gap-2'>
          {url && (
            <ArrowLink openNewTab as={ButtonLink} href={url}>
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
