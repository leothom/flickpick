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
    onSearch: PropTypes.func.isRequired,
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="text-2xl font-bold text-blue-500">FlickPick</div>
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full"
      >
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
          className="w-full sm:w-auto px-4 py-2 rounded-md border-2 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          <option value="movies">Movies</option>
          <option value="tv-shows">TV Shows</option>
          <option value="people">People</option>
        </select>
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 dark:bg-blue-300 dark:text-black dark:hover:bg-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
