import styles from "./Home.module.css";
import Cards from "../Cards/Cards";
import {useSelector,useDispatch} from "react-redux"
import {useEffect, useState} from "react";
import SearchBar from "./SearchBar/SearchBar";
import { get_countries,get_activities } from "../../redux/actions";
import useContinentActivityChange from "./hook"
import usePagination from "./usePagination"
import { Link } from "react-router-dom";

const Home = ()=>{
    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);
    const activities = useSelector((state)=>state.activities);
    const ITEMS_PER_PAGE = 10;
    const { handleContinentChange, handleActivityChange, handleOrderByChange, handleOrderDirectionChange } = useContinentActivityChange();
    const { currentPage, handleNextPage, handlePrevPage,setCurrentPage } = usePagination(ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const items = countries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(()=>{
        dispatch(get_countries())
        dispatch(get_activities())
        setCurrentPage(1);
    },[dispatch]);

    useEffect(()=>{
        setCurrentPage(1);
    },[countries]);

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
                    <select className={styles.SelectHome} value="" onChange={handleContinentChange}>
                        <option disabled value="">Selecciona un continente</option>
                        <option value="">Todos los continentes</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Asia">Asia</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Antarctica">Antarctica</option>
                    </select>
                    <select className={styles.SelectHome} value="" onChange={handleActivityChange}>
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
                        
                    <select className={styles.SelectHome} value="" onChange={handleOrderByChange}>
                        <option value="">Ordenar por:</option>
                        <option value="name">Nombre</option>
                        <option value="population">Población</option>
                    </select>
                    <select className={styles.SelectHome} value="" onChange={handleOrderDirectionChange}>
                      <option value="">Orden</option>
                      <option value="asc">Ascendente</option>
                      <option value="desc">Descendente</option>
                    </select>

                </div>
            </div>
        
            {items && <Cards countries={items} />}
            <div className={styles.pagination}> 
                <button className={styles.buttonHome} onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button className={styles.buttonHome} onClick={handleNextPage} disabled={Number(startIndex+10) > countries.length}>Siguiente</button>
            </div>
                
        </div>
    </div>
    )
}

export default Home;