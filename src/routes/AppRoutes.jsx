import { Route, Routes } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'

import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import FavoritesPage from '../pages/FavoritesPage'


export default function AppRoutes() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </MainLayout>
    );
}