import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard";
import Search from "../../components/Search";

import styles from './Home.module.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
    const [recentsMovies, setRecentsMovies] = useState([]);

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setRecentsMovies(data.results);
    };

    useEffect(() => {
        const nowPlayingUrl = `${moviesURL}now_playing?${apiKey}&language=pt-BR`;

        getMovies(nowPlayingUrl);
    }, []);


    return (
        <div className={styles.container}>
            <div>
                <Search />
            </div>
            <div className={styles.title}>
                <h3>Últimos lançamentos:</h3>
            </div>
            <div className={styles.moviesContainer}>
                {recentsMovies.length === 0 && <p>Carregando...</p>}
                {recentsMovies.length > 0 &&
                    recentsMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}