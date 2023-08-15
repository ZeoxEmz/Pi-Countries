import styles from "./Card.module.css";
import {Link} from "react-router-dom"

const Card = ({id,flag,name,continent})=>{
    return(
        <div className={styles.card}>
            <Link className={styles.link} to={`/detail/${id}`}>
                <div className={styles.divHead}>
                    <img className={styles.img} src={flag} alt={`Flag of ${name}`} />
                </div>
                <div className={styles.divBody}>
                    <p>Nombre: {name}</p>
                    <p>Continente: {continent}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;