import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [usersTitle, setUsersTitle] = useState("");
  const [usersDescription, setUsersDescription] = useState("");
  const [usersUrl, setUsersUrl] = useState("");
  const [usersRating, setUsersRating] = useState(null);

  const [movies, setMovies] = useState([]);

  const handleAdding = () => {
    const movieInfo = {
      id: movies.length, 
      movieTitle: usersTitle,
      movieDescription: usersDescription,
      movieUrl: usersUrl,
      movieRating: parseInt(usersRating),
    };

    setMovies((prevMovies) => [...prevMovies, movieInfo]);
  };

  return (
    <div className="min-h-screen flex flex-col gap-10">
      <Navbar />
      <div className="flex justify-center items-center min-h-64 flex-col gap-5">
        {/* Inputs for title, description, URL, rating */}
        <div className="flex gap-10 py-20">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={usersTitle}
              onChange={(e) => setUsersTitle(e.target.value)}
              className="border-2 p-2 rounded"
              placeholder="Title"
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="text"
              value={usersDescription}
              onChange={(e) => setUsersDescription(e.target.value)}
              className="border-2 p-2 rounded"
                placeholder="Descriptions"
            />
          </div>
          <div>
            <label htmlFor="url">Poster URL:</label>
            <input
              id="url"
              type="text"
              value={usersUrl}
              onChange={(e) => setUsersUrl(e.target.value)}
              className="border-2 p-2 rounded"
                placeholder="Poster URL"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              id="rating"
              type="number"
              value={usersRating}
              onChange={(e) => setUsersRating(e.target.value)}
              className="border-2 p-2 rounded"
                placeholder="Rating"
            />
          </div>
        </div>
        <button
          onClick={handleAdding}
          style={{ backgroundColor: "red" }}
          className="btnScale px-5 py-3 text-white rounded-xl shadow-xl"
        >
          Add Movie
        </button>
      </div>

      <div className="p-20 gap-10 grid grid-cols-3">
        {movies.map((movieItem) => (
          <Link
            to={`/movie/${movieItem.id}`} // Navigate to description page with movie id
            key={movieItem.id}
          >
            <MovieCard
              title={movieItem.movieTitle}
              description={movieItem.movieDescription}
              posterUrl={movieItem.movieUrl}
              rating={movieItem.movieRating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

