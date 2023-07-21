import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies &&
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
