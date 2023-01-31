import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const ColumnSection = ({
  id,
  imgSrc,
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
      <div className={clsx('layout', styles.container)}>
        <img className={styles.img} src={imgSrc} alt={title} />
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
                target={buttonLink.target}
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
