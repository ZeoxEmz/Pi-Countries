import styles from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = ({countries})=>{
    return(
        <div className={styles.cards}>
                {countries && countries.map(({id,flag,name,continent})=>(
                    <div key={id}>{name &&(
                        <Card
                        key={id}
                        id={id}
                        flag={flag}
                        name={name}
                        continent={continent}
                        />)
                        }
                    </div>
                ))}
        </div>
    )
}

export default Cards;