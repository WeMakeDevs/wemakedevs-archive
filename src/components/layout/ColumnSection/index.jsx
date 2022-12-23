import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const ColumnSection = ({
  id,
  imgSrc,
  title,
  buttonLinks,
  direction = 'left',
  children,
}) => {
  return (
    <section
      id={id}
      className={clsx(styles.section, direction === 'right' && styles.right)}
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
              >
                {buttonLink.name}
              </ArrowLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnSection;
