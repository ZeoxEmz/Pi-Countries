import styles from "./Navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className={styles.background_nav}>
            <Link className={styles.link} to="/home">Inicio</Link>
            <Link className={styles.link} to="/form">Crear Actividad</Link>
        </div>
    )
}

export default Navbar;