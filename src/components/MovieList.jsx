import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="m-4 bg-white shadow-lg rounded-lg overflow-hidden max-w-xs"
        >
          <img
            className="h-56 w-full object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="p-4">
            <h2 className="font-bold text-2xl mb-2">{movie.title}</h2>
            <p className="text-gray-700">{movie.overview}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-600">
                {movie.release_date}
              </span>
              <span className="float-right bg-yellow-400 text-yellow-900 rounded-full px-2 py-0 mt-1 text-xs font-bold">
                {movie.vote_average}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
