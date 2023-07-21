import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import PeopleList from './components/PeopleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]); 
  const [resultType, setResultType] = useState(''); 
  const [darkMode, setDarkMode] = useState(true);
  const handleMoviesUpdate = (movies) => {
    setMovies(movies);
  }

  const handleSearch = (searchText, category) => {
    let url;
    switch (category) {
      case 'movies':
        url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;
        break;
      case 'tv-shows':
        url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;
        break;
      case 'people':
        url = `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;
        break;
      default:
        url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;
    }
  
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setResultType(category);
      if (category === 'people') {
        setResults(data.results);
      } else {
        setMovies(data.results);
      }
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  


    return (
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <SearchBar onMoviesUpdate={handleMoviesUpdate} onSearch={handleSearch} /> 
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                darkMode ? 'bg-gray-700 text-gray-100' : ''
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>
          {
            resultType === 'movies' || resultType === 'tv-shows' ? (
              <MovieList movies={movies} />
            ) : resultType === 'people' ? (
              <PeopleList people={results} />
            ) : null
          }

        <footer className="w-full text-center border-t border-grey p-4 mt-4 bottom-0">
          <img 
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" 
            alt="The Movie DB"
            className="w-64 inline-block mb-2"
          />
          <p className="text-gray-600 dark:text-white">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        </footer>


        </div>
    </div>
    );  
  };
  

export default App;