import React from "react";

function PersonCard({ person }) {
  const imageUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
    : "placeholder.jpeg";

  return (
    <div className="rounded overflow-hidden shadow-lg m-4 w-full dark:bg-gray-800">
      <img className="w-full" src={imageUrl} alt={`${person.name} Profile`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{person.name}</div>
        {person.known_for && person.known_for.length > 0 && (
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">
            Known for:{" "}
            {person.known_for
              .filter((work) => work.title)
              .map((work, index) => (index ? ", " : "") + work.title)}
          </p>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={`https://www.themoviedb.org/person/${person.id}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-700"
        >
          Visit TMDB Page
        </a>
      </div>
    </div>
  );
}

export default PersonCard;
