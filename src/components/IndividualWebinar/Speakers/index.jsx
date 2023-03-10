import clsx from 'clsx';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

import styles from './index.module.css';

import UnstyledLink from '@/components/links/UnstyledLink';

const Speakers = ({ speakers }) => {
  return (
    <section id='upcoming'>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Speakers</h2>
        <hr className={clsx('styled-hr', styles.hr)} />

        <div className={styles.cardsContainer}>
          {speakers.map((speaker) => (
            <SpeakerCard {...speaker} key={speaker.image} />
          ))}
          <SpeakerCard
            {...{
              name: 'Kunal Kushawa',
              description: 'Manger @Civo',
              twitter: 'kunalstwt',
              linkedin: 'kunal-kushwaha',
              img: 'https://github.com/kunal-kushwaha.png',
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Speakers;

const SpeakerCard = ({ img, name, description, linkedin, twitter }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={name + ' profile'} />

      <h3>{name}</h3>
      <p>{description}</p>
      {twitter && (
        <UnstyledLink
          className='h3'
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'cetner',
            alignItems: 'center',
            gap: '1rem',
            flexDirection: 'row',
          }}
          href={`https://twitter.com/${twitter}`}
        >
          <BsTwitter /> @{twitter}
        </UnstyledLink>
      )}
      {linkedin && (
        <UnstyledLink
          className='h3'
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'cetner',
            alignItems: 'center',
            gap: '1rem',
            flexDirection: 'row',
          }}
          href={`https://www.linkedin.com/in/${linkedin}`}
        >
          <BsLinkedin /> @{linkedin}
        </UnstyledLink>
      )}
    </div>
  );
};
