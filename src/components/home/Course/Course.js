import './course.css';

import CardsList from './CardsList';
import { courses } from './data';

const course = () => {
  return (
    <>
      <CardsList courses={courses} />
    </>
  );
};

export default course;
