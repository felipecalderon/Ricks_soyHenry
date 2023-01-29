import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
    <div >
        <ul className={styles.nav}>
            <li><Link to="/">Personajes</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>
    </div>
    )
}

export default Nav