import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  // * State Variables
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchName, setSearchName] = useState("");

  // * Filter helper function
  function filterNames(arr, query) {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase()),
    );
  }
  const searchResults = !searchName
    ? persons
    : filterNames(persons, searchName);

  // * Event Handlers
  function handleNewName(event) {
    setNewName(event.target.value);
  }

  function handleNewPhone(event) {
    setNewPhone(event.target.value);
  }

  function handleAddName(event) {
    event.preventDefault();
    if (persons.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    if (!newName || !newPhone) {
      alert("Form is incomplete! Fill in missing forms");
      return;
    }
    const newId = persons.length + 1;
    setPersons(persons.concat({ name: newName, phone: newPhone, id: newId }));
    setNewName("");
    setNewPhone("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        handleAddName={handleAddName}
      />
      <h3>Numbers</h3>
      <Persons searchResults={searchResults} />
    </div>
  );
};

export default App;
