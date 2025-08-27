import styles from './MoviesCard.module.css'

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useFavorites } from '../../hooks/useFavorites';

const imagesURL = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }) {

    const { favorites, addFavorite } = useFavorites()

    const isFavorite = favorites.some((fav) => fav.id === movie.id)

    return (
        <div className={styles.movieCard}>
            <img src={imagesURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}

            <button onClick={() => addFavorite(movie)}>
                {isFavorite ? <MdFavorite color="red" /> : <MdFavoriteBorder />}
                {isFavorite ? " Remover" : " Favoritar"}
            </button>
        </div>
    )
}