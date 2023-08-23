import styles from "./LandingPage.module.css";
import {Link} from "react-router-dom"

const LandingPage = ()=>{
    return(
        <div className={styles.landing}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h1 className={styles.h1}>Descubre y Diseña:{<br></br>} Tu Aventura Global en Nuestra App</h1>
                <Link className={styles.landingLink} to="/home">Entra Ahora</Link>
            </div>

            <div className={styles.content2}>
                <h1 className={styles.h1}>Explora Países, Crea Recuerdos: Todo en una App Única</h1>
                <p className={styles.p}>"Descubre el mundo a tu manera con nuestra app: elige destinos,
                diseña actividades y crea recuerdos inolvidables en cada país que explores. 
                ¡Tu aventura personalizada comienza aquí!"</p>
                <Link className={styles.landingLink} to="/home">Entra Ahora</Link>
            </div>

            <div className={styles.content3}>
                <h1 className={styles.h1}>Tu Viaje Único: Descubre, Planifica y Disfruta con Nuestra App</h1>
                <p className={styles.p}>Explora y Personaliza tu Experiencia Global: Nuestra App para Descubrir Destinos y Diseñar Aventuras</p>
                <Link className={styles.landingLink} to="/home">Entra Ahora</Link>
            </div>
        </div>
    )
}

export default LandingPage;