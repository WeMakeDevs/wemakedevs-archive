import { BsGithub, BsGlobe, BsTwitter, BsYoutube } from 'react-icons/bs';

import TeamMemberCard from '@/components/Cards/TeamMemberCard';

import {
  aayushImage,
  adarshImage,
  bhavyaImage,
  gauriImage,
  kunalImage,
} from '@/assets/images/team';

const teamMembers = [
  {
    name: 'Kunal Kushwaha',
    role: 'Founder',
    img: kunalImage,
    description: 'Founder @WeMakeDevs | Currently at @Civo',
    socials: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/kunalstwt',
        icon: BsTwitter,
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/KunalKushwaha',
        icon: BsYoutube,
      },
    ],
  },
  {
    name: 'Aayush Sharma',
    role: 'Community Manager',
    img: aayushImage,
    description:
      'Community Manager - @wemakedevs | prev - @mericodev, @ApacheAPISIX | Contributor - @keptnProject, @canonical | Tech Speaker 🎤 |',
    socials: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/SuperAayush14',
        icon: BsTwitter,
      },
      {
        name: 'GitHub',
        link: 'https://github.com/SuperAayush',
        icon: BsGithub,
      },
    ],
  },
  {
    name: 'Bhavya Sachdeva',
    role: 'Community Manager',
    img: bhavyaImage,
    description:
      "Community Manager - @wemakedevs | prev - @mericodev, @napptive | Tech Speaker 🎤 | LiFT Scholar'23",
    socials: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/bhavya_58',
        icon: BsTwitter,
      },
      {
        name: 'GitHub',
        link: 'https://github.com/bhavyastar',
        icon: BsGithub,
      },
    ],
  },
  {
    name: 'Gauri Maheshwari',
    role: 'Community Manager',
    img: gauriImage,
    description:
      "19 | GSoC'23 @FreeCADNews | Research Intern'23 @iitroorkee | Team @WeMakeDevs | MLSA | Mechanical Engineer | IGDTUW'25 | potterhead⚡️| F1 devotee 🏎",
    socials: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/gaurii09',
        icon: BsTwitter,
      },
      {
        name: 'GitHub',
        link: 'https://github.com/gauriimaheshwarii',
        icon: BsGithub,
      },
    ],
  },
  {
    name: 'Adarsh Dubey',
    role: 'Designer & Developer',
    img: adarshImage,
    description:
      'Building web experiences for WeMakeDevs. Working towards ML and AI.',
    socials: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/inclinedadarsh',
        icon: BsTwitter,
      },
      {
        name: 'Bento',
        link: 'https://bento.me/adarsh',
        icon: BsGlobe,
      },
    ],
  },
];

const Team = () => {
  return (
    <div className='layout -mt-20 pt-20' id='team'>
      {/* The `-mt-20 pt-20` are there so that the smooth-scroll scrolls perfectly at the title */}
      <h2 className='h1 text-center'>Meet the team</h2>
      <p className='mx-auto my-3 max-w-3xl text-center text-base font-normal text-white/80'>
        We are the people behind this community. We thank every previous team
        member as well as every contributor. You'll be always at the heart of
        this community!
      </p>
      <div className='mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-14'>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
