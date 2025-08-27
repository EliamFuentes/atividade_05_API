import styles from './MoviesCard.module.css'
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useFavorites } from '../../context/FavoritesContext';

const imagesURL = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }) {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(movie.id);

    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <div className={styles.movieCard}>
            <img src={imagesURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}

            <button onClick={toggleFavorite}>
                {favorite ? <MdFavorite color="red" /> : <MdFavoriteBorder />}
                {favorite ? " Remover" : " Favoritar"}
            </button>
        </div>
    )
}
