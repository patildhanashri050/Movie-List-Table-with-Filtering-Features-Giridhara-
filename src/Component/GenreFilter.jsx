export default function GenreFilter({ genres, selected, setSelected }) {

  function handleChange(e) {
    const value = e.target.value;
    setSelected(value === "ALL" ? [] : [value]);
  }

  return (
    <select
      className="form-select"
      value={selected[0] || "ALL"}
      onChange={handleChange}
    >
      <option value="ALL">All Genres</option>
      {genres.map((g, i) => (
        <option key={i} value={g}>{g}</option>
      ))}
    </select>
  );
}
