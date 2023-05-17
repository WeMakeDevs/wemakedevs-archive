import SpeakerCard from '@/components/Cards/SpeakerCard';

const Speakers = ({ speakers }) => {
  return (
    <section id='speakers'>
      <div className='layout py-20'>
        <h2 className='h1'>Speakers</h2>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <SpeakerCard
            {...{
              name: 'Kunal Kushwaha',
              description: 'DevRel Manager @Civo',
              twitter: 'kunalstwt',
              img: 'https://github.com/kunal-kushwaha.png',
            }}
          />
          {speakers.map((speaker) => (
            <SpeakerCard {...speaker} key={speaker.image} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Speakers;
