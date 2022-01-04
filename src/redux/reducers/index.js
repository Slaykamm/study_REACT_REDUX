import { combineReducers } from "redux";
import country from './country'
import period from './period'
import city from './city'


export default combineReducers({
    
    period,
    country, 
    city

})