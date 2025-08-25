import { CiSearch } from "react-icons/ci";

import styles from './Search.module.css'

export default function Search() {
    return (
        <div className={styles.container}>
            <div className={styles.searchTitle}>
                <h1>Descubra Filmes Incríveis</h1>
                <p>Pesquise por seus filmes favoritos e descubra novos títulos</p>
            </div>

            <form className={styles.formSearch}>
                <div className={styles.containerSearch}>
                    <CiSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Digite o nome do filme..."
                        className={styles.inputSearch}
                    />
                </div>
                <button type="submit" className={styles.buttonSearch}>
                    Buscar
                </button>
            </form>
        </div>
    )
}