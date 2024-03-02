const TeamMemberCard = ({ name, role, description, socials, img }) => {
  return (
    <div className='group relative z-0 min-w-[200px] max-w-[260px] overflow-hidden rounded-lg'>
      <img src={img} alt={name} className='z-0' />
      <div className='bg-team-card absolute left-0 top-[75%] z-10 flex h-full flex-col justify-between p-6 transition-[top] group-hover:top-0'>
        <div className=''>
          <h3 className='text-white'>{name}</h3>
          <p className='font-medium text-blue-300'>{role}</p>
        </div>
        <div className='space-y-4'>
          <p className='font-normal leading-tight'>{description}</p>
          <div className='flex gap-3'>
            {socials.map((social, index) => (
              <a key={index} href={social.link}>
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
