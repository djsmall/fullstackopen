const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((course) => (
        <p>
          {course.name} {course.exercises}
        </p>
      ))}
    </div>
  );
};
export default Course;
