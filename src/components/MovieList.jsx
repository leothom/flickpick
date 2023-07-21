import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-start">
      {movies && movies.length > 0 ? (
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="w-full text-center mt-4 text-xl text-gray-500">
          No results found.
        </p>
      )}
    </div>
  );
};

export default MovieList;
