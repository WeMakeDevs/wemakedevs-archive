import styles from './index.module.css';

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <section>
        <img src={image} alt={title + 'banner'} />
        <div className={styles.cardDetails}>
          <p>{description}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
