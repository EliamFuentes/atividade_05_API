import Search from "../../components/Search";
import styles from "./FavoritesPage.module.css";

export default function FavoritePage() {
    return (
        <div className={styles.favoritesPage}>
            <div>
                <Search />
            </div>

            <h2>Meus Favoritos</h2>
        </div>
    )
}
