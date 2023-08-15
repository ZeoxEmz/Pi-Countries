import styles from "./LandingPage.module.css";
import {Link} from "react-router-dom"

const LandingPage = ()=>{
    return(
        <div className={styles.landing}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h1>Bienvenido a PaísExperiencias</h1>
                <Link to="/home">Ingresar</Link>
            </div>
        </div>
    )
}

export default LandingPage;