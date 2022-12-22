import Card from './Card';

const CardsList = ({ courses }) => {
  return (
    <div className='course_cont_2'>
      {courses.map((course) => (
        <Card course={course} key={course}></Card>
      ))}
    </div>
  );
};

export default CardsList;
