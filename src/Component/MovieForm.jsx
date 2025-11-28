import React, { useState, useEffect } from "react";

export default function MovieForm({ movie, onSave, onClose }) {

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState("");
  const [cast, setCast] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setYear(movie.year);
      setGenres(movie.genres.join(", "));
      setCast(movie.cast.join(", "));
      setThumbnail(movie.thumbnail || "");
      setPreview(movie.thumbnail || "");
    } else {
      setTitle("");
      setYear("");
      setGenres("");
      setCast("");
      setThumbnail("");
      setPreview("");
    }
  }, [movie]);

 const handleThumb = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setThumbnail(reader.result);  
    setPreview(reader.result);
  };
  reader.readAsDataURL(file); 
};


 const saveData = () => {
  const obj = {
    title,
    year: Number(year),
    genres: genres.split(",").map(g => g.trim()),
    cast: cast.split(",").map(c => c.trim()),
    thumbnail: thumbnail, 
    isCustom: true
  };

  onSave(obj);
};


  return (
    <div>
      <h4>{movie ? "Edit Movie" : "Add Movie"}</h4>

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Genres"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Cast"
        value={cast}
        onChange={(e) => setCast(e.target.value)}
      />

      <label className="form-label">Thumbnail</label>
      <input
        type="file"
        className="form-control mb-3"
        accept="image/*"
        onChange={handleThumb}
      />

      {preview && (
        <img src={preview} style={{ width: "100px", marginBottom: "10px" }} />
      )}

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success" onClick={saveData}>
          Save
        </button>

        <button className="btn btn-danger" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
