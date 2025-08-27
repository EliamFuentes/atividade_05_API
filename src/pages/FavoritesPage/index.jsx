import { useFavorites } from "../../context/FavoritesContext";
import MovieCard from "../../components/MovieCard";
import Search from "../../components/Search";
import styles from "./FavoritePage.module.css"; // opcional para estilizar

export default function FavoritePage() {
    const { favorites } = useFavorites();

    return (
        <div className={styles.favoritesPage}>
            <div>
                <Search />
            </div>

            <h2>Meus Favoritos</h2>
            <div className={styles.favoritesCards}>
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} showLink={true} />
                    ))
                ) : (
                    <p>Você ainda não adicionou filmes aos favoritos.</p>
                )}
            </div>
        </div>
    )
}
