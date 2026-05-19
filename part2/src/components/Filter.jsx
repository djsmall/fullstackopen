function Filter({ searchName, setSearchName }) {
  function handleSearchNames(event) {
    setSearchName(event.target.value);
  }

  return (
    <form>
      <div>
        filter shown with{" "}
        <input type="text" value={searchName} onChange={handleSearchNames} />
      </div>
    </form>
  );
}
export default Filter;
