import Carousel from 'better-react-carousel';

import BootDotDev from '@/assets/partner/bootdotdev.jpg';
import Finout from '@/assets/partner/finout.jpg';
import Komodor from '@/assets/partner/komodor.jpg';
import Kubesphere from '@/assets/partner/kubesphere.jpg';
import Stream from '@/assets/partner/stream.jpg';
import Teleport from '@/assets/partner/teleport.png';
import Wilco from '@/assets/partner/wilco.jpg';

const PartnerTestimonials = () => {
  return (
    <div>
      <div className='layout mx-auto pb-20'>
        <h2 className='h1'>Testimonials</h2>
        <hr className='styled-hr my-6' />
        <div className='flex flex-col gap-4'>
          <Carousel
            cols={3}
            rows={1}
            gap={20}
            autoplay={2500}
            dotColorActive='rgb(89,66,233)'
            showDots
            loop
          >
            {data.map((item) => (
              <Carousel.Item key={item.from}>
                <TestimonialCard {...item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PartnerTestimonials;

const TestimonialCard = ({ src, description, from }) => {
  return (
    <div className='mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1'>
      <img
        alt='testimonial'
        className=' mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center'
        src={src}
      />
      <h2 className='font-medium text-content '>{from}</h2>
      <hr className='styled-hr styled-hr--light mx-auto my-4' />
      <p>{description}</p>
    </div>
  );
};

const data = [
  {
    src: Kubesphere,
    description:
      "It's been a great feeling to collaborate with Kunal and his community, and he has made the entire process a pleasure. What's more matters, Kunal has made great contributions to letting more people know the benefits of our services and increase our user base.By the end of 2022, we had got more than 11K GitHub stars for our main repo and 5K sign ups for our community.",
    from: 'Kubesphere',
  },
  {
    src: Stream,
    description:
      "We've worked on various collaborations with Kunal's community, all of which have been an extraordinary and profitable experience. Kunal's interest to detail, clear expectations, and innovative work paired with his reach is a fantastic equation. We plan and look forward to continued partnership with Kunal.Our partnership with Kunal brought in 105 Chat Trials in Q4!",
    from: 'Stream',
  },
  {
    src: Teleport,
    description:
      'Partnering with Kunal and his community was one of the highlights for the Teleport team this year. The quality of content is top-notch, the community engagement is very high, and the ROI is there to prove it. #2 top web traffic driver partnership last year. 10K+ new web sessions with the majority being new users. 100+ cloud trial downloads.',
    from: 'Teleport',
  },
  {
    src: BootDotDev,
    description:
      "The collab with Kunal's community was fantastic! Looking forward to more.",
    from: 'Boot.dev',
  },
  {
    src: Finout,
    description:
      "The collab with Kunal's community was fantastic! Our twitter and LI following has grown significantly",
    from: 'Finout',
  },
  {
    src: Wilco,
    description:
      "The collab with Kunal's community was extremely succesful. We got around 1700 signups through our campaigns",
    from: 'Wilco',
  },
  {
    src: Komodor,
    description:
      "The collab with Kunal's community was amazing! After every activity with Kunal my community grows by 100s and the same goes for GH stars!",
    from: 'Komodor',
  },
];
