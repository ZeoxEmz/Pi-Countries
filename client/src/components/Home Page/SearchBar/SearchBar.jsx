import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import {get_countries} from "../../../redux/actions"

const SearchBar = ()=>{
    const dispatch = useDispatch();
    const originalCountries = useSelector((state) => state.originalCountries);
    const [input,setInput] = useState("");


    const handleInputChange = (event)=>{
        const value = event.target.value;
        setInput(value);
    }
    const handleClick = (event)=>{
        dispatch(get_countries(input));
        setInput("");
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          dispatch(get_countries(input));
          setInput("");
        }
      };
    
    useEffect(() => {
        if (input === "") {
          dispatch({ type: "GET_COUNTRIES", payload: originalCountries });
        }
      }, [input, dispatch, originalCountries]);

    return (
        <div>
            <input onKeyDown={handleKeyPress} placeholder="Buscar país por nombre..." onChange={handleInputChange} type="text" value={input}/>
            <button onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default SearchBar;