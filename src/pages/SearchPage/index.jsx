import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from './SearchPage.module.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export default function SearchPage() {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        if (query) {
            const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
            getSearchedMovies(searchWithQueryURL);
        }
    }, [query]);

    return (
        <div>
            <div>
                <Search />
            </div>
            <div className={styles.title}>
                <h3>Resultados para: <span className={styles.queryText}>{query}</span></h3>
            </div>
            <div className={styles.moviesContainer}>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}