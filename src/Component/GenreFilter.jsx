import React from "react";

export default function GenreFilter({ genres, selected, setSelected }) {

  function handleSelect(e) {
    const list = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setSelected(list);
  }

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">Select Genre</label>

      <select
        className="form-select"
        multiple
        value={selected}
        onChange={handleSelect}
      >
        {genres.map((g, index) => (
          <option key={index} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}
