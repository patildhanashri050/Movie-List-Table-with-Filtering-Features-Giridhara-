export default function MovieTable({ movies, handleEdit, handleDelete }) {
  return (
    <table className="table table-bordered mt-3">
      <thead className="table-dark text-center">
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Year</th>
          <th>Genres</th>
          <th>Cast</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie, index) => {
          const { title, year, genres, cast, thumbnail } = movie;

          return (
            <tr key={index}>
              <td className="text-center">
                {
                  <img src={thumbnail} style={{ width: "80px" }} />
                }
              </td>

              <td>{title}</td>
              <td>{year}</td>
              <td>{genres.join(", ")}</td>
              <td>{cast.join(", ")}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm ms-2 mt-3"
                  onClick={() => handleEdit(movie, index)} >Edit </button>
              </td>

              <td>
                <button
                  className="btn  btn-sm ms-3 mt-3"
                  onClick={() => handleDelete(movie)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
