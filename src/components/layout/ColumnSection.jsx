import clsx from 'clsx';

import clsxm from '@/lib/utils';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const ColumnSection = ({
  id,
  src,
  isVideo = false,
  title,
  as,
  buttonLinks,
  direction = 'left',
  children,
}) => {
  const Component = as || 'section';
  return (
    <Component id={id}>
      <div
        className={clsx(
          'layout',
          'flex flex-col justify-between gap-5 py-20 lg:flex-row lg:gap-12',
          direction === 'right' && 'lg:flex-row-reverse'
        )}
      >
        {isVideo ? (
          <iframe
            src={src}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='inline-block aspect-[560/315] grow  border-none object-cover lg:self-center'
          ></iframe>
        ) : (
          <img
            className='inline-block grow border-none object-cover '
            src={src}
            alt={title}
          />
        )}
        <div
          className={clsxm(
            'flex w-full shrink-0 flex-col gap-6 lg:w-1/2',
            isVideo && 'lg:first-letter:w-1/2'
          )}
        >
          <h2 className='h1'>{title}</h2>
          <hr className='styled-hr' />
          <ul className='h4 flex flex-col gap-6 font-medium text-content first:mt-0'>
            {children}
          </ul>
          <div className='inline-flex flex-wrap gap-2'>
            {buttonLinks?.map((buttonLink) => (
              <ArrowLink
                key={buttonLink.name}
                href={buttonLink.href}
                as={ButtonLink}
                openNewTab
              >
                {buttonLink.name}
              </ArrowLink>
            ))}
          </div>
        </div>
      </div>
    </Component>
  );
};

export default ColumnSection;
