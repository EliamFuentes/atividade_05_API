import Search from "../../components/Search";
import styles from "./FavoritesPage.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import MovieCard from "../../components/MovieCard";

export default function FavoritePage() {
    const { favorites } = useFavorites();
    return (
        <div className={styles.favoritesPage}>
            <div>
                <Search />
            </div>

            <div className={styles.title}>
                <h2>Meus Favoritos</h2>
            </div>

            <div className={styles.favoritesCards}>
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            showLink={true}
                        />
                    ))
                ) : (
                    <p>Você ainda não adicionou filmes aos favoritos.</p>
                )}
            </div>
        </div>
    );
}
