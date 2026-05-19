function Persons({ searchResults }) {
  return (
    <table>
      <tbody>
        {searchResults.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Persons;
