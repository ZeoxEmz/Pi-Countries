import React, { useEffect, useState } from 'react';
import styles from "./Form.module.css";
import { get_countries_name, postActivity } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import Validation from './Validation';

const Form = () => {
    const dispatch = useDispatch();
    const countriesName = useSelector((state) => state.countriesName);
    const [errors,setErrors] = useState({name: "",difficulty: "",duration: "",season: "",selectedCountries: ""})
    const [country, setCountry] = useState({name: "",difficulty: 0,duration: 0,season: "",selectedCountries: []});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if(name == "difficulty"){
            setCountry({...country,[name]:+value})
            return setErrors(Validation({...country,[name]:+value}))
        }
        else{
            setCountry({...country,[name]:value})
            setErrors(Validation({...country,[name]:value}))
        }
    };

    const handleChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setCountry({...country,selectedCountries:selectedOptions})
        setErrors(Validation({...country,selectedCountries:selectedOptions}))
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const {name,difficulty,duration,season,selectedCountries} = country;
        if (Object.keys(errors).length === 0) {
            dispatch(postActivity({name,difficulty,duration,season,countries:selectedCountries}))
            setCountry({name: "",difficulty: 0,duration: 0,season: "",selectedCountries: []})
            setErrors({name: "",difficulty: 0,duration: 0,season: "",selectedCountries: []})
            alert("Actividad creada correctamente")
        }else{
            alert("Porfavor Completa Todos Los Campos Correctamente")
        }
    }

    useEffect(() => {
        dispatch(get_countries_name());
    }, [dispatch]);

    return (
        <div className={styles.divHero}>
            <h1 className={styles.titulo}>Crear Actividad Turística</h1>
            <div className={styles.content}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <div className={styles.divName}>
                        <label className={styles.label} htmlFor="name">Nombre:</label>
                        <input className={styles.inputName} type="text" id="name" name='name' value={country.name} onChange={handleInputChange} required />
                    </div>
                    <div className={styles.divDifficulty}>
                        <label className={styles.label} htmlFor="difficulty">Dificultad:</label>
                        <select className={styles.selectDifficulty} id="difficulty" name='difficulty' value={country.difficulty} onChange={handleInputChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className={styles.divDuration}>
                        <label className={styles.label} htmlFor="duration">Duración:</label>
                        <input className={styles.inputDuration} type="text" id="duration" name='duration' value={country.duration} onChange={handleInputChange} required />
                    </div>
                    <div className={styles.divSeason}>
                        <label className={styles.label} htmlFor="season">Temporada:</label>
                        <select className={styles.selectSeason} id="season" name='season' value={country.season} onChange={handleInputChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="Primavera">Primavera</option>
                            <option value="Verano">Verano</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Invierno">Invierno</option>
                        </select>
                    </div>
                    <div className={styles.divCountries}>
                        <label className={styles.label} htmlFor="paises">Países:</label>
                        <select className={styles.selectCountry} id="paises" multiple value={country.selectedCountries} onChange={handleChange} required>
                            {countriesName.map((name, key) => (
                                <option className={styles.formOption} key={key} value={`${name}`}>{name}</option>
                            ))}
                        </select>
                    </div>

                    <button className={styles.button} type="submit">Crear Actividad Turística</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
