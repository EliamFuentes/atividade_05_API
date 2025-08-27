import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error("useFavorites deve ser usado dentro de <FavoritesProvider>");
    }

    const { favorites, setFavorites } = context;

    function addFavorite(newFavorite) {
        const repeatedFavorite = favorites.some((item) => item.id === newFavorite.id);

        if (!repeatedFavorite) {
            return setFavorites([...favorites, newFavorite]);
        }

        // remover se já existe
        const newList = favorites.filter((fav) => fav.id !== newFavorite.id);
        return setFavorites(newList);
    }

    return {
        favorites,
        addFavorite
    };
}
