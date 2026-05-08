import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ rating, average, positive }) => {
  return rating.all === 0 ? (
    <p>No feedback given</p>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={rating.good} />
        <StatisticLine text="neutral" value={rating.neutral} />
        <StatisticLine text="bad" value={rating.bad} />
        <StatisticLine text="all" value={rating.all} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positive" value={positive.toFixed(2) + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });
  const average =
    rating.all === 0 ? 0 : (rating.good - rating.bad) / rating.all;
  const positive = rating.all === 0 ? 0 : (rating.good / rating.all) * 100;

  const handlerOnClick = (value) => {
    const newAll = rating.all + 1;
    const newRating = {
      ...rating,
      [value]: rating[value] + 1,
      all: newAll,
    };
    setRating(newRating);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handlerOnClick("good")} text="good" />
      <Button onClick={() => handlerOnClick("neutral")} text="neutral" />
      <Button onClick={() => handlerOnClick("bad")} text="bad" />

      <h1>statistics</h1>
      <Statistics rating={rating} average={average} positive={positive} />
    </div>
  );
};

export default App;
