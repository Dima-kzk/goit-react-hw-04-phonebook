export function Filter({ filter, InputChange }) {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="filter" value={filter} onChange={InputChange} />
    </>
  );
}
