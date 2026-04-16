const Total = (props) => {
  let exercises = [];
  for (let i = 0; i < 3; i++) {
    exercises[i] = props.total.parts[i].exercises;
  }
  const total = exercises.reduce((sum, current) => sum + current, 0);
  return <p>Number of exercises: {total}</p>;
};
export default Total;
