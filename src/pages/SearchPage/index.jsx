import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export default function SearchPage() {
    return (
        <div>
            <div>
                <Search />
            </div>
        </div>
    )
}