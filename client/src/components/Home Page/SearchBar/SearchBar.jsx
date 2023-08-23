import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import {get_countries_By_Name} from "../../../redux/actions"
import styles from "./SearchBar.module.css";

const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [input,setInput] = useState("");


    const handleInputChange = (event)=>{
      const value = event.target.value;
      setInput(value);
    }
    const handleClick = (event)=>{
      dispatch(get_countries_By_Name(input));
      setInput("");
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          dispatch(get_countries_By_Name(input));
          setInput("");
        }
      };
      
    
    return (
        <div className={styles.div}>
            <input className={styles.input} onKeyDown={handleKeyPress} placeholder="Buscar país por nombre..." onChange={handleInputChange} type="text" value={input}/>
            <button className={styles.button} onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default SearchBar;