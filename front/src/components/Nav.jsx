import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
    <div >
        <ul className={styles.nav}>
            <li><Link to="/">Menu 1</Link></li>
            <li><Link to="/personaje">Menu 2</Link></li>
            <li>Menu 3</li>
            <li>Menu 4</li>
        </ul>
    </div>
    )
}

export default Nav