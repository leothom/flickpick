import React from "react";

function formatTitleForURL(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : null;
  const tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;

  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(2) : null;

  return (
    <div className="rounded overflow-hidden shadow-lg m-4 w-full dark:bg-gray-800">
      {movie.poster_path && (
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">
          {movie.overview}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Rating: {movie.vote_average.toFixed(2)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-700"
        >
          Visit TMDB Page
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
