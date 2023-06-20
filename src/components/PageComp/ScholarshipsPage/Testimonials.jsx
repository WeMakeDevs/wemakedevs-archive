import Carousel from 'better-react-carousel';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import clsxm from '@/lib/utils';

import data from '@/content/Scholarship/testimonial';

import TestimonialCard from '@/components/Cards/TestimonialCard';

const Testimonials = ({ as }) => {
  const Component = as || 'div';
  return (
    <Component className={clsxm(as === 'section' && 'pt-20')}>
      <div className='layout mx-auto mt-20 pb-20'>
        <h2 className='h1'>Testimonials</h2>
        <hr className='styled-hr my-6' />
        <div className='flex flex-col gap-4'>
          <Carousel
            cols={3}
            rows={1}
            gap={20}
            autoplay={2500}
            dotColorActive='rgb(89,66,233)'
            arrowRight={
              <AiFillRightCircle
                size={50}
                className='absolute top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black text-2xl text-indigo-600'
              />
            }
            arrowLeft={
              <AiFillLeftCircle
                size={50}
                className='absolute top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black text-2xl text-indigo-600'
              />
            }
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
