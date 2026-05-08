import { useState } from "react";
import Unicafe from "./Unicafe";
import Anecdote from "./Anecdote";
import Total from "./Total.jsx";
import Header from "./Header";
import Content from "./Content";

const ExerciseContent = ({ content }) => {
  return <div>{content}</div>;
};

const App = () => {
  const [exercise, setExercise] = useState(
    <div>Please select an exercise from above</div>,
  );
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const handlerExerciseSelection = (selection) => {
    if (selection === "Course Information") {
      setExercise(
        <div>
          <Header course={course} />
          <Content content={course} />
          <Total total={course} />
        </div>,
      );
    } else if (selection === "Unicafe") {
      setExercise(<Unicafe />);
    } else if (selection === "Anecdote") {
      setExercise(<Anecdote />);
    } else {
      setExercise(<div>Please select an exercise from above</div>);
    }
  };

  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            gap: "10px",
          }}
        >
          <li>
            <button
              onClick={() => handlerExerciseSelection("Course Information")}
            >
              Course Information
            </button>
          </li>
          <li>
            <button onClick={() => handlerExerciseSelection("Unicafe")}>
              Unicafe
            </button>
          </li>
          <li>
            <button onClick={() => handlerExerciseSelection("Anecdote")}>
              "Anecdote"
            </button>
          </li>
        </ul>
      </nav>
      <ExerciseContent content={exercise} />
    </div>
  );
};
export default App;
