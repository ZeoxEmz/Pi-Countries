import React, { useEffect } from 'react';
import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_detail } from '../../redux/actions';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {
        Activities,
        area,
        capital,
        continent,
        flag,
        population,
        name,
        subregion,
    } = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(get_detail(id));
    }, [dispatch, id]);

    return (
        <div className={styles.detail}>
            <div className={styles.content}>
                <div className={styles.divImg}><img className={styles.img} src={flag} alt={`${flag} of ${name}`} /></div>
                    <h2 className={styles.titulo}>Información del país</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{id}</td>
                            </tr>
                            <tr>
                                <th>Nombre</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Continente</th>
                                <td>{continent}</td>
                            </tr>
                            <tr>
                                <th>Capital</th>
                                <td>{capital}</td>
                            </tr>
                            <tr>
                                <th>área</th>
                                <td>{area}</td>
                            </tr>
                            <tr>
                                <th>Población</th>
                                <td>{population}</td>
                            </tr>
                            <tr>
                                <th>Subregión</th>
                                <td>{subregion}</td>
                            </tr>
                        </tbody>  
                    </table>
                    <h2 className={styles.titulo}>Actividades del país</h2>
                    {Activities && Activities.map((activity,key)=>(
                        console.log(activity),
                        <div className={styles.divActivities} key={key}>
                            <h3 className={styles.tituloH3}>Actividad n°{activity.id}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Nombre</th>
                                        <td>{activity.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Dificultad</th>
                                        <td>{activity.difficulty}</td>
                                    </tr>
                                    <tr>
                                        <th>Duración</th>
                                        <td>{activity.duration}</td>
                                    </tr>
                                    <tr>
                                        <th>Temporada</th>
                                        <td>{activity.season}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
            </div>


            {/* <div className={styles.content}>
                <div className={styles.divImg}><img className={styles.img} src={flag} alt={`${flag} of ${name}`} /></div>
                <div className={styles.infoCountry}>
                    <h2 className={styles.titulo}>Información del país</h2>
                    <p className={styles.p}>id: <span className={styles.span}>{id}</span></p><hr />
                    <p>name: {name}</p><hr />
                    <p>continent: {continent}</p><hr />
                    <p>capital: {capital}</p><hr />
                    {subregion && <p>subregion: {subregion}</p>}<hr />
                    {area && <p>area: {area}</p>}<hr />
                    <p>population: {population}</p><hr />
                </div>
            </div> */}
            {/* {Activities && Activities.map((Activity)=>
                <div className={styles.contentActivities}>
                    <h2>Activities:</h2>
                    <h2>name: {Activity.name}</h2>
                    <h2>id: {Activity.id}</h2>
                    <h2>difficulty: {Activity.difficulty}</h2>
                    <h2>duration: {Activity.duration}</h2>
                    <p>season: {Activity.season}</p>
                </div>
            )} */}
        </div>
    );
};

export default Detail;
