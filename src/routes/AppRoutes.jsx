import { Route, Routes } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'

import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import FavoritesPage from '../pages/FavoritesPage'
import Search from '../pages/SearchPage'


export default function AppRoutes() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </MainLayout>
    );
}