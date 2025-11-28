export const saveAllMovies = (movies) => {
  localStorage.setItem("moviesData", JSON.stringify(movies));
};

export const loadAllMovies = () => {
  const data = localStorage.getItem("moviesData");
  return data ? JSON.parse(data) : null;
};


