import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const DetailCard = ({ image, title, description, url, btnText }) => {
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
        {url && (
          <ArrowLink as={ButtonLink} openNewTab className='mt-4' href={url}>
            {btnText}
          </ArrowLink>
        )}
      </div>
    </div>
  );
};

export default DetailCard;
