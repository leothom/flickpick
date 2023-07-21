import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilm } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("movies");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText, category);
    setIsFullScreen(false);
  };

  SearchBar.propTypes = {
    onMoviesUpdate: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-500 mr-4">
        <FontAwesomeIcon icon={faFilm} className="fa-fw" />
        FlickPick
      </div>

      {!isFullScreen && (
        <button className="lg:hidden" onClick={() => setIsFullScreen(true)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      )}

      {isFullScreen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="p-5 bg-white rounded shadow-2xl w-10/12 md:w-1/2 lg:w-1/4">
            <form
              onSubmit={handleSearch}
              className="flex flex-col items-center space-y-4 w-full"
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
                className="w-full px-4 py-2 rounded-md border-2 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              >
                <option value="movies">Movies</option>
                <option value="tv-shows">TV Shows</option>
                <option value="people">People</option>
              </select>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 dark:bg-blue-300 dark:text-black dark:hover:bg-blue-500"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="lg:block hidden flex items-center space-x-4">
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
      )}
    </div>
  );
};

export default SearchBar;
