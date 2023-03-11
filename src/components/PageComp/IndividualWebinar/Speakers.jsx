import SpeakerCard from '@/components/Cards/SpeakerCard';

const Speakers = ({ speakers }) => {
  return (
    <section id='upcoming'>
      <div className='layout py-20'>
        <h2 className='h1'>Speakers</h2>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
