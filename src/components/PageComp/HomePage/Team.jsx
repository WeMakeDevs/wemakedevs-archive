import TeamMemberCard from '@/components/Cards/TeamMemberCard';

import { adarshImage } from '@/assets/images/team';

const teamMembers = [
  {
    name: 'Kunal Kushwaha',
    role: 'Founder',
    img: adarshImage,
    description: 'Some description about the team member',
    socials: {
      twitter: 'https://twitter.com/kunalstwt',
      github: 'https://github.com/kunal-kushwaha',
    },
  },
  {
    name: 'Ayush Sharma',
    role: 'Community Manager',
    img: adarshImage,
    description: 'Some description about the team member',
    socials: {
      twitter: 'https://twitter.com/SuperAayush14',
      github: 'https://github.com/SuperAayush',
    },
  },
  {
    name: 'Bhavya Sachdeva',
    role: 'Community Manager',
    img: adarshImage,
    description: 'Some description about the team member',
    socials: {
      twitter: 'https://twitter.com/bhavya_58',
      github: 'https://github.com/bhavyastar',
    },
  },
  {
    name: 'Gauri Maheshwari',
    role: 'Community Manager',
    img: adarshImage,
    description: 'Some description about the team member',
    socials: {
      twitter: 'https://twitter.com/gaurii09',
      github: 'https://github.com/gauriimaheshwarii',
    },
  },
  {
    name: 'Adarsh Dubey',
    role: 'Developer',
    img: adarshImage,
    description: 'Web Dev, ML Enthusiast and Community Builder.',
    socials: {
      twitter: 'https://twitter.com/inclinedadarsh',
      github: 'https://github.com/inclinedadarsh',
    },
  },
];

const Team = () => {
  return (
    <div className='layout'>
      <h2 className='h1 text-center'>Meet the team</h2>
      <p className='mx-auto my-3 max-w-3xl text-center text-base font-normal text-white/80'>
        We are the people behind this community. We thank every previous team
        member as well as every contributor. You'll be always at the heart of
        this community!
      </p>
      <div className='mt-14 flex flex-wrap justify-center gap-10'>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
