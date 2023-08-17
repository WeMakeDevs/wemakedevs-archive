import clsxm from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

const Syllabus = ({ content }) => {
  return (
    <section id='syllabus'>
      <div className='layout py-20'>
        <h2 className='h1 text-center'>Syllabus</h2>
        <hr className='styled-hr my-6 mx-auto' />
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          {content.syllabus.map((s, i) => (
            <div
              data-index={i + 1}
              key={s.title}
              className={clsxm(
                'border-2 border-primary/30 p-6',
                'before:h2 before:mb-2 before:inline-flex before:aspect-square before:h-12 before:items-center before:justify-center before:rounded-md before:bg-primary/30  before:text-content before:content-[attr(data-index)]'
              )}
            >
              <UnstyledLink
                className='h3 pl-4'
                key={s.title}
                href={s.videoLink}
              >
                {s.title}
              </UnstyledLink>
              <p className='mt-2'>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
