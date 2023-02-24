import clsx from 'clsx';

import styles from './index.module.css';

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
  background = 'transparent',
  children,
}) => {
  const Component = as || 'section';
  return (
    <Component
      id={id}
      className={clsx(
        styles.section,
        background === 'gradient'
          ? 'gradient'
          : background == 'static-bg'
          ? 'static-bg'
          : 'transparent',
        direction === 'right' && styles.right
      )}
    >
      <div
        className={clsx('layout', styles.container, isVideo && styles.video)}
      >
        {isVideo ? (
          <iframe
            src={src}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className={clsx(styles.img)}
          ></iframe>
        ) : (
          <img className={styles.img} src={src} alt={title} />
        )}
        <div className={styles.infoContainer}>
          <h2 className='h1'>{title}</h2>
          <hr className='styled-hr' />
          <ul>{children}</ul>
          <div className={styles.btns}>
            {buttonLinks?.map((buttonLink) => (
              <ArrowLink
                key={buttonLink.name}
                href={buttonLink.href}
                className={styles.btn}
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
