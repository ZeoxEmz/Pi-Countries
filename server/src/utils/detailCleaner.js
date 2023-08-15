function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

const detailCleaner = (arr)=>{
    // ID (Código de tres letras). Nombre. Imagen de la bandera. Continente. Capital. Subregión (si tiene). 
    // Área (si tiene). Población.

    const countrys = arr.map((country)=>{
        
        const id = country.name.common.split(" ").join("").slice(0,3)
        const name = country.name.common
        const flag = country.flags.png
        const continent = country.continents[0] || "Desconocido";
        const capital = country.capital && eliminarDiacriticos(country.capital[0]) || "Desconocida";
        const subregion = country.subregion || "Desconocida";
        const area = country.area || 0;
        const population = country.population || 0;

        const result = {id,name,flag,continent,capital,subregion,area,population};
        return result
    })
    
    return countrys;
}

module.exports = detailCleaner;