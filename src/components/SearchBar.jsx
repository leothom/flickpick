import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("movies");

  const handleSearch = (event) => {
    event.preventDefault();

    // Pass the searchText and category up to the parent component
    onSearch(searchText, category);
  };

  SearchBar.propTypes = {
    onMoviesUpdate: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired, // Added this line
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-4">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full px-4 py-2 rounded-md border-2 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        placeholder="Search..."
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 rounded-md border-2 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="movies">Movies</option>
        <option value="tv-shows">TV Shows</option>
        <option value="people">People</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 dark:bg-blue-300 dark:text-black dark:hover:bg-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
