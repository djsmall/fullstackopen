import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part
        part={props.content.parts[0].name}
        exercise={props.content.parts[0].exercises}
      />
      <Part
        part={props.content.parts[1].name}
        exercise={props.content.parts[1].exercises}
      />
      <Part
        part={props.content.parts[2].name}
        exercise={props.content.parts[2].exercises}
      />
    </div>
  );
};

export default Content;
