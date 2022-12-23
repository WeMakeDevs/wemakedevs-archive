const CardContent = ({ course = {} }) => {
  return (
    <>
      <img
        className='course_cont_2_card_1'
        src={course.image}
        alt={course.title}
      />
      <p className='course_cont_2_card_1_heading'> {course.title} </p>
      <p className='course_cont_2_card_1_para_1'>{course.description}</p>
    </>
  );
};

const Card = ({ course = {} }) => {
  if (course.link) {
    return (
      <a
        href={course.link}
        target='_blank'
        rel='noopener noreferrer'
        className='course_cont_2_card'
      >
        <CardContent course={course} />
      </a>
    );
  }

  return (
    <div className='course_cont_2_card'>
      <CardContent course={course} />
    </div>
  );
};

export default Card;
