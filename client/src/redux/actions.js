import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const ORD_BY_CONTINENT = "ORD_BY_CONTINENT";
export const ORD_BY_ACTIVITY = "ORD_BY_ACTIVITY";
export const SORT = "SORT";
export const POST_ACTIVITY_SUCCESS = "POST_ACTIVITY_SUCCESS";
export const POST_ACTIVITY_ERROR = "POST_ACTIVITY_ERROR";

export const get_countries = ()=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries`);
            dispatch({type:GET_COUNTRIES,payload:response.data}) 
        } catch (error) {
            console.error(error)
        }
    }
}
export const get_countries_By_Name = (name)=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
            dispatch({type:GET_COUNTRIES_BY_NAME,payload:response.data})
        } catch (error) {
            console.error(error)
        }
    }
}
export const get_detail = (id)=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({type:GET_DETAIL,payload:response.data})
        } catch (error) {
            console.error(error)
        }
    }
}
export const get_activities = ()=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/activities`)
            dispatch({type:GET_ACTIVITIES,payload:response.data})
        } catch (error) {
            console.error(error)
        }
    }
}
export const get_countries_name = ()=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/name`)
            dispatch({type:GET_COUNTRIES_NAME,payload:response.data})
        } catch (error) {
            console.error(error)
        }
    }
}
export const postActivity = (data) => {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/activities', data);
            dispatch({ type: POST_ACTIVITY_SUCCESS, payload: response.data });
        } catch (error) {
        console.error(error);
        dispatch({ type: POST_ACTIVITY_ERROR, payload: error.message });
        }
    };
};
export const clear_detail = ()=>{
    return {type:CLEAR_DETAIL}
}
export const ord_by_continent = (continent)=>{
    return {type:ORD_BY_CONTINENT,payload:continent}
}
export const ord_by_activity = (activity)=>{
    return {type:ORD_BY_ACTIVITY,payload:activity}
}
export const sortCountries = (orderBy,orderDirection)=>{
    return {type:SORT,payload:{orderBy,orderDirection}}
}