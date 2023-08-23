import {GET_COUNTRIES,GET_COUNTRIES_BY_NAME,GET_DETAIL,CLEAR_DETAIL,ORD_BY_CONTINENT,GET_ACTIVITIES,ORD_BY_ACTIVITY,POST_ACTIVITY_SUCCESS,POST_ACTIVITY_ERROR,SORT,GET_COUNTRIES_NAME} from "./actions"
const initialState = {
    originalCountries : [],
    countries:[],
    detail:{},
    activities:[],
    selectedActivity: "",
    countriesName:[],
    error:null,
};
const applyActivityFilter = (originalCountries, selectedActivity) => {
    return selectedActivity ? originalCountries.filter((country) => country.Activities.some((act) => act.name == selectedActivity)) : originalCountries;
};

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_COUNTRIES: return {...state,originalCountries:action.payload,countries:action.payload};
        case GET_COUNTRIES_BY_NAME: return {...state,countries:action.payload};
        case ORD_BY_CONTINENT: 
            const ordByContinent = action.payload ? state.originalCountries.filter((country) => country.continent === action.payload) : state.originalCountries;
        return {...state,countries:ordByContinent}
 
        case GET_ACTIVITIES: return {...state,activities:action.payload};

        case ORD_BY_ACTIVITY: 
        const selectedActivity = action.payload
        if(action.payload) {
                const countriesSort = applyActivityFilter(state.originalCountries,action.payload)
                return {...state,countries:countriesSort,selectedActivity}
            }else{
                return { ...state, countries: state.originalCountries };
            }

        case GET_DETAIL: return {...state,detail:action.payload}

        case CLEAR_DETAIL: return {...state,detail:{}}

        case SORT:
            const { orderBy, orderDirection } = action.payload;
            const asc = orderDirection === "asc";
            const sortedCountries = [...state.countries].sort((a, b) => {
                const propA = a[orderBy];
                const propB = b[orderBy];
                if (propA > propB) return asc ? 1 : -1;
                if (propA < propB) return asc ? -1 : 1;
                return 0;
            });
            return {
                ...state,
                countries: sortedCountries,
            };
        case GET_COUNTRIES_NAME:return {...state,countriesName: action.payload}
        case POST_ACTIVITY_SUCCESS:return {...state,activities:[...state.activities, action.payload],error:null},console.log(action.payload)
        case POST_ACTIVITY_ERROR:return {...state,error:action.payload}
    
        default: return {...state}
    }
}

export default rootReducer;