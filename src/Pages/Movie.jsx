import { useEffect, useState } from "react";
import { saveAllMovies, loadAllMovies } from "../Utils/storage";
import GenreFilter from "../Component/GenreFilter";
import MovieTable from "../Component/MovieTable";
import MovieForm from "../Component/MovieForm";
import Popup from "../Component/Popup";

export default function Movies() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    const stored = loadAllMovies();

    if (stored && stored.length > 0) {
      setMovies(stored);
      loadGenres(stored);
      setLoading(false);
    } else {
      fetch("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json")
        .then(res => res.json())
        .then(data => {

        
          const withImages = data.filter(m => m.thumbnail);

        
          const cleanData = withImages.slice(0, 500).map(m => ({
            title: m.title,
            year: m.year,
            cast: m.cast || [],
            genres: m.genres || [],
            thumbnail: m.thumbnail, 
            isCustom: false
          }));

          saveAllMovies(cleanData);
          setMovies(cleanData);
          loadGenres(cleanData);
          setLoading(false);
        });
    }
  }, []);



  useEffect(() => setCurrentPage(1), [search, selectedGenres, movies]);



  const filteredMovies = movies.filter(m => {
    const titleMatch = m.title.toLowerCase().includes(search.toLowerCase());
    const genreMatch =
      selectedGenres.length === 0 ||
      selectedGenres.every(g => m.genres.includes(g));

    return titleMatch && genreMatch;
  });


  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentMovies = filteredMovies.slice(firstIndex, lastIndex);



  function loadGenres(list) {
    const all = new Set();
    list.forEach(m => m.genres.forEach(g => all.add(g)));
    setGenres([...all]);
  }


  function addMovie() {
    setEditMovie(null);
    setShowPopup(true);
  }

  function handleEdit(movie, index) {
    setEditMovie({ ...movie, index });
    setShowPopup(true);
  }

  function deleteMovie(movie) {
    const updated = movies.filter(m => m.title !== movie.title);
    setMovies(updated);
    saveAllMovies(updated);
  }

  function saveMovie(movie) {
    let updated;

    if (editMovie && editMovie.index !== undefined) {
      updated = [...movies];
      updated[editMovie.index] = movie;
    } else {
      updated = [...movies, movie];
    }

    setMovies(updated);
    saveAllMovies(updated);
    setShowPopup(false);
    setEditMovie(null);
  }


  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;


  return (
    <div className="container mt-4">

      <button className="btn btn-dark float-end mb-2" onClick={addMovie}>
        Add Movie
      </button>

      <input
        className="form-control my-3"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

 
      <GenreFilter
        genres={genres}
        selected={selectedGenres}
        setSelected={setSelectedGenres}
      />

      <MovieTable
        movies={currentMovies}
        handleEdit={handleEdit}
        handleDelete={deleteMovie}
      />

     
      <div className="d-flex justify-content-center align-items-center mt-3 gap-2 flex-wrap">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-secondary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>


      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <MovieForm
            movie={editMovie}
            onSave={saveMovie}
            onClose={() => setShowPopup(false)}
          />
        </Popup>
      )}
    </div>
  );
}
