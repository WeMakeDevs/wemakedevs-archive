import Carousel from 'better-react-carousel';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import clsxm from '@/lib/utils';

import data from '@/content/Scholarship/testimonial';

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
                <div className='mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1'>
                  <img
                    alt='testimonial'
                    className=' mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center'
                    src={item.src}
                  />
                  <p className='my-1 text-lg'>{item.desc1}</p>
                  <p className='my-1 text-lg'>{item.desc2}</p>
                  <hr className='styled-hr styled-hr--light mx-auto my-4' />
                  <h2 className='text-base font-medium text-content '>
                    {item.from}
                  </h2>
                  <a
                    href={item.source}
                    target='_blank'
                    rel='noreferrer'
                    className='text-sm font-medium text-content underline underline-offset-2'
                  >
                    Source
                  </a>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Component>
  );
};

export default Testimonials;
