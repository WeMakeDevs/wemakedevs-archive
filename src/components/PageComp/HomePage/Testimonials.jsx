import Carousel from 'better-react-carousel';

import clsxm from '@/lib/utils';

import anurag from '@/assets/home/testimonials/anurag.jpg';
import ekjottest2 from '@/assets/home/testimonials/ekjottest2.jpg';
import prasanna from '@/assets/home/testimonials/prasanna.jpg';
import rahultest1 from '@/assets/home/testimonials/rahultest1.jpg';
import sajjantest3 from '@/assets/home/testimonials/sajjantest3.jpg';
import siva from '@/assets/home/testimonials/sivanithin.jpg';

const Testimonials = ({ as }) => {
  const Component = as || 'div';
  return (
    <Component className={clsxm(as === 'section' && 'pt-20')}>
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
    </Component>
  );
};

export default Testimonials;

const TestimonialCard = ({ src, description, from, designation }) => {
  return (
    <div className='mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1'>
      <img
        alt='testimonial'
        className=' mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center'
        src={src}
      />
      <p className='text-lg'>{description}</p>
      <hr className='styled-hr styled-hr--light mx-auto my-4' />
      <h2 className='text-sm font-medium text-content '>{from}</h2>
      <p className='text-content/80'>{designation}</p>
    </div>
  );
};

const data = [
  {
    src: rahultest1,
    description:
      "The way this guy is teaching me Java is just Mind Blowing and Brilliant. I've never thought that these topics would be that much easier. Kudos to @kunalstwt #DSAwithKunal",
    from: 'RAHUL KUMAR',
    designation: '@rahulstwt_',
  },
  {
    src: ekjottest2,
    description:
      "Thanks @kunalstwt for helping me understand the benefits of Binary Search and how it's a lot effective than linear search. Understood the theory now and will be solving questions with @WeMakeDevs and build up the concept. #DSAwithKunal",
    from: 'EKJOT SINGH',
    designation: '@Ekjotmakhija',
  },
  {
    src: sajjantest3,
    description:
      'Done with amazing playlist of Object Oriented Programming by @kunalstwt bhaiya. Every concept was explained very well and got to know so many new things. Thanks kunal bhaiya for such an amazing playlist. #DSAwithKunal',
    from: 'SAJJAN YADAV',
    designation: '@SajjanStr',
  },
  {
    src: anurag,
    description:
      "Completed @kunalstwt's DevOps bootcamp networking video. Really awesome explanation, got a clear overview of whole networking process. Application layer is perfectly understood. #DevOpswithkunal  #networking",
    from: 'ANURAG PATHAK',
    designation: '@AnuragThePathak',
  },
  {
    src: prasanna,
    description:
      'Finally, completed 4 hour long video on computer networking. Amazing content @kunalstwt. Thanks for creating such an educational content for us 🙌🙌 #DevOpswithkunal',
    from: 'Prasanna',
    designation: '@gramopadhye37',
  },
  {
    src: siva,
    description:
      'What an explanation 🔥 on recursion! This dsa course is just absolutely amazing. Thank you Kunal Kushwaha for this amazing course. #DSAwithKunal #dsa',
    from: 'Siva Nithin',
    designation: '@GSIVANITHIN',
  },
];
