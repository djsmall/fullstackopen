const Total = (props) => {
  const total = props.total.reduce((sum, current) => sum + current, 0);
  return <p>Number of exercises: {total}</p>;
};
export default Total;
