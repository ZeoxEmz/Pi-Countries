import styles from "./Home.module.css";
import Cards from "../Cards/Cards";
import {useSelector,useDispatch} from "react-redux"
import {useEffect} from "react";
import SearchBar from "./SearchBar/SearchBar";
import { get_countries,get_activities } from "../../redux/actions";
import useContinentActivityChange from "./hook"
import usePagination from "./usePagination"
import { Link } from "react-router-dom";

const Home = ()=>{
    const dispatch = useDispatch();
    const {selectedContinent,handleContinentChange,selectedActivity,handleActivityChange,orderBy,handleOrderByChange,orderDirection,handleOrderDirectionChange,} = useContinentActivityChange()
    const { currentPage, handleNextPage, handlePrevPage } = usePagination();
    const countries = useSelector((state)=>state.countries);
    const activities = useSelector((state)=>state.activities);
    useEffect(()=>{
        dispatch(get_countries("",currentPage))
        dispatch(get_activities())
    },[dispatch])


return(
    <div className={styles.home}>
        <div className={styles.headimg}>
            <p className={styles.p}>Transforma tus sueños en viajes reales. Descubre destinos,
             diseña recuerdos. ¡Comienza tu aventura haciendo clic abajo!</p>
            <Link to="/form" className={styles.link}>Crea tus propias actividades</Link>
        </div>
        <div className={styles.content}>
            <div className={styles.headerControllers}>
                <div className={styles.filters}>
                    <select className={styles.SelectHome} value={selectedContinent} onChange={handleContinentChange}>
                        <option value="">Todos los continentes</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Asia">Asia</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Antarctica">Antarctica</option>
                    </select>
                    <select className={styles.SelectHome} value={selectedActivity} onChange={handleActivityChange}>
                        <option value="">Todas las actividades</option>
                        {activities.map(({name},key)=>(
                            <option key={key} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.searchBar}>
                    <SearchBar/>
                </div>
                <div className={styles.orders}>
                        
                    <select className={styles.SelectHome} value={orderBy} onChange={handleOrderByChange}>
                        <option value="name">Nombre</option>
                        <option value="population">Población</option>
                    </select>
                    <select className={styles.SelectHome} value={orderDirection} onChange={handleOrderDirectionChange}>
                      <option value="asc">Ascendente</option>
                      <option value="desc">Descendente</option>
                    </select>

                </div>
            </div>
            
            {countries.length > 0 && <Cards countries={countries}/>} 
            <div className={styles.pagination}> 
                <button className={styles.buttonHome} onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button className={styles.buttonHome} onClick={handleNextPage}>Siguiente</button>
            </div>
                
        </div>
    </div>
    )
}

export default Home;