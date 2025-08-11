import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";

// Define movie type
export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster: "https://m.media-amazon.com/images/I/51s+Q2QpKRL._AC_SY679_.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    poster: "https://m.media-amazon.com/images/I/71n58YFQZSL._AC_SY679_.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://m.media-amazon.com/images/I/51k0qa6qH-L._AC_SY679_.jpg",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
  },
];

const Movies: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [search, setSearch] = useState<string>("");
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [ratings, setRatings] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("ratings");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const rateMovie = (id: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [id]: rating }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="movie-search"
      />
      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <div
            className={`movie-card${
              favorites.includes(movie.id) ? " favorite" : ""
            }`}
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <button
              className="fav-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(movie.id);
              }}
            >
              {favorites.includes(movie.id)
                ? "★ Favorite"
                : "☆ Add to Favorites"}
            </button>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    (ratings[movie.id] || 0) >= star ? "star filled" : "star"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    rateMovie(movie.id, star);
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <MovieDetails
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default Movies;
