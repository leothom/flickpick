import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    console.log(process.env.REACT_APP_MOVIE_API_KEY);
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); // Log the response data to the console
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Router>
      <div className="dark bg-gray-900 text-white min-h-screen">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          "Loading..."
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Routes>
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/" element={<MovieList movies={movies} />} />
          </Routes>
        )}
      </div>
    </Router>
  );  
};

export default App;
