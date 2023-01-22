import styles from './index.module.css';

import Hashnode from '../../../assets/hashnode/Special-Prize.png';

const index = () => {
  return (
    <section className={styles.hashnodeMain}>
      <h1 className='h1'> Current event & Prize </h1>
      <br />
      <hr
        className='styled-hr'
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <br />
      <br />
      <img className={styles.hashnodeSpecial} src={Hashnode} />
    </section>
  );
};

export default index;
