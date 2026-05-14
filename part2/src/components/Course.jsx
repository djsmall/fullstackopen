const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <b>
          total of {course.parts.reduce((sum, curr) => sum + curr.exercises, 0)}{" "}
          exercises
        </b>
      </p>
    </div>
  );
};
export default Course;
