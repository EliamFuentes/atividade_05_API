import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard";
import Search from "../../components/Search";

import styles from './Home.module.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl);
    }, []);

    console.log(topMovies);

    return (
        <div className={styles.container}>
            <div>
                <Search />
            </div>
            <div className={styles.title}>
                <h3>Filmes Populares</h3>
            </div>
            <div className={styles.moviesContainer}>
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}