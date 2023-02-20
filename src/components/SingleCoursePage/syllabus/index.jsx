import clsx from 'clsx';

import styles from './index.module.css';
const Syllabus = ({ content }) => {
  return (
    <div>
      <div id='syllabus' className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Syllabus</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.syllabus}>
          {content.syllabus.map((s, i) => (
            <div data-index={i + 1} key={s.title} className={styles.item}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
