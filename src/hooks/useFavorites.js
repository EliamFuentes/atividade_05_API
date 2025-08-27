import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export function useFavorites() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {

        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

        let newList = [...favorite]

        if (!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        newList = favorite.filter((fav) => fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}
