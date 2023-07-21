import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("movies");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText, category);
  };

  SearchBar.propTypes = {
    onMoviesUpdate: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-500 mr-4">FlickPick</div>
      {!isSearchOpen && (
        <button
          className="md:hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      )}

      <div
        className={`md:block ${
          isSearchOpen ? "block" : "hidden"
        } md:flex items-center space-x-4`}
      >
        <form
          onSubmit={handleSearch}
          className="flex items-center space-x-4 w-full"
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
      </div>
    </div>
  );
};

export default SearchBar;
