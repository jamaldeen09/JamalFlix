import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // useParams to extract the ID

const MovieDescriptionPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // For navigating back

  // Assuming you have a way to retrieve movie data (either from state, API, etc.)
  // Here, we'll simulate that by using the `id` to fetch the correct movie from an array.
  const movies = JSON.parse(localStorage.getItem("movies")) || []; // Retrieve movie data (you can use state or context too)
  const movie = movies.find((movie) => movie.id === parseInt(id));

  // Handle case where movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/")} className="btnScale">
        Back to Home
      </button>
      <div className="movie-details">
        <h2>{movie.movieTitle}</h2>
        <p>{movie.movieDescription}</p>
        <iframe
          width="560"
          height="315"
          src={movie.movieUrl} // Assuming the URL is the trailer link
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDescriptionPage;
