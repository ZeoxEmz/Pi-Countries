const Validation = ({ name, difficulty, duration, season,selectedCountries }) => {
    const errors = {};
  
    if (!name) {
      errors.name = "Por favor, escribe un nombre para la actividad.";
    } else if (/\d/.test(name)) {
      errors.name = "El nombre no puede contener números.";
    } else if (name.length >= 20) {
      errors.name = "El nombre es muy largo, por favor utiliza menos de 20 caracteres.";
    }
  
    if (!difficulty || ![1, 2, 3, 4, 5].includes(difficulty)) {
        errors.difficulty = "Por favor, elige una dificultad válida (1 al 5).";
    }
  
    if (!duration || isNaN(duration) || duration == 0) {
      errors.duration = "Por favor, introduce una duración válida en minutos.";
    }
  
    if (!season) {
      errors.season = "Por favor, elige una temporada.";
    }
  
    if (selectedCountries.length < 1) {
      errors.selectedCountries = "Por favor, elige una un Pais.";
    }

    return errors;
  };
  
  export default Validation;
  