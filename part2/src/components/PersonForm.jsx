function PersonForm({
  newName,
  newPhone,
  handleNewName,
  handleNewPhone,
  handleAddName,
}) {
  return (
    <form>
      <div>
        name: <input type="text" value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input type="tel" value={newPhone} onChange={handleNewPhone} />
      </div>
      <div>
        <button type="submit" onClick={handleAddName}>
          add
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
