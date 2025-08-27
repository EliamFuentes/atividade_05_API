import { TbMovie } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom'

import styles from './MainLayout.module.css'

export default function MainLayout({ children }) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <span className={styles.icon}><TbMovie /></span>
                    <Link to="/"><h2>MovieApp</h2></Link>
                </div>
                <div className={styles.favorites}>
                    <Link to="/favorites"><button><MdFavorite />Favoritos</button></Link>
                </div>
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}