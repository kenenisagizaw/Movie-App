import React from "react";

// Define the type for a movie
interface Movie {
  title: string;
  year: number;
  poster: string;
}

// Define the props for the component
interface MovieDetailsProps {
  movie: Movie | null;
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={movie.poster} alt={movie.title} className="modal-poster" />
        <h2>{movie.title}</h2>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Description:</strong> This is a placeholder description for {movie.title}.</p>
      </div>
    </div>
  );
};

export default MovieDetails;
