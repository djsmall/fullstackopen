import { useState } from "react";

function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
}

const TopVotes = ({ anecdotes, votes }) => {
  const highestVote = votes.reduce(
    (largestIndex, currentValue, currentIndex, arr) =>
      currentValue > arr[largestIndex] ? currentIndex : largestIndex,
    0,
  );
  return <p>{anecdotes[highestVote]}</p>;
};

const Anecdote = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  function handlerGetNextAnecdote() {
    const randomIndex = getRandomInt(0, anecdotes.length);
    setSelected(randomIndex);
  }
  function handlerUpvote() {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes([...newVotes]);
  }

  return (
    <div>
      <p>
        {anecdotes[selected]} {votes[selected]} votes
      </p>
      <button onClick={handlerUpvote}>vote</button>
      <button onClick={handlerGetNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <TopVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default Anecdote;
