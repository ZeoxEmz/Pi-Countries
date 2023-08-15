const Validation = ({name,difficulty,duration,season})=>{
    const errors = {};

    if(!name) errors.name = "por favor escribe una actividad";

    if(!difficulty) errors.difficulty = "por favor elije una dificultad";

    if(!duration) errors.duration = "por favor elije una duracion";

    if(!season) errors.season = "por favor elije una temporada";
    
    return errors
}

export default Validation;