import styles from './MovieDetails.module.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import MovieCard from '../../components/MovieCard'
import Search from '../../components/Search'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true)
                setError(null)

                const movieRes = await fetch(`${moviesURL}${id}?${apiKey}&language=pt-BR`)

                if (!movieRes.ok) throw new Error('Erro ao buscar detalhes do filme.')

                const movieData = await movieRes.json()

                const creditsRes = await fetch(`${moviesURL}${id}/credits?${apiKey}&language=pt-BR`)

                if (!creditsRes.ok) throw new Error('Erro ao buscar créditos do filme.')
                const creditsData = await creditsRes.json()

                const director = creditsData.crew.find(member => member.job === "Director")

                const cast = creditsData.cast.slice(0, 5)

                setMovie({
                    ...movieData,
                    director: director?.name || "Não informado",
                    cast: cast.map(actor => actor.name)
                })

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchMovieDetails()
    }, [id])

    if (loading) return <p>Carregando...</p>
    if (error) return <p>{error}</p>

    return (
        <div className={styles.moviePage}>
            <div className={styles.movieSearch}>
                <Search />
            </div>
            {movie &&
                <>
                    <div className={styles.movieCard}>
                        <MovieCard movie={movie} showLink={false} />
                    </div>
                    <div className={styles.info}>
                        <h3>Sinopse:</h3>
                        <p>{movie.overview}</p>

                        <h3>Diretor:</h3>
                        <p>{movie.director}</p>
                        <h3>Elenco:</h3>

                        <p>{movie.cast?.length > 0 ? movie.cast.join(', ') : "Não informado"}</p>
                        <h3>Duração:</h3>

                        <p>{movie.runtime} minutos</p>
                    </div> </>}
        </div>

    )
}
