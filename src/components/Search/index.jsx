import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import styles from './Search.module.css'

export default function Search() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchTitle}>
                <h1>Descubra Filmes Incríveis</h1>
                <p>Pesquise por seus filmes favoritos e descubra novos títulos</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.formSearch}>
                <div className={styles.containerSearch}>
                    <CiSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Digite o nome do filme..."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
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