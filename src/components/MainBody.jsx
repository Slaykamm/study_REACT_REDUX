
import React, {useState} from 'react';

import _ from 'lodash'
import { connect } from 'react-redux'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton'



import './style/MainBody.css'
import HourlyDeploy from './HourlyDeploy';

const MainBody = (props) => {




const [reduxInput, setReduxInput] = useState('')

 


    return (
        <div className='MainBody'>

 

                            
            { props.period==1 && props.city.length && props.country.length && props.choosenCity.length
            
            ? <HourlyDeploy period={props.period} city={props.city} country={props.country} choosenCity={props.choosenCity}/>
            : <p>Выберите входные параметры</p>
        
        
        }

        
        </div>
    );
};




export default connect(
    //mapStateToProps
    state => ({
        period: state.period,
        country: state.country, 
        city: state.city, 
        choosenCity: state.choosenCity
    
    }),


    //mapDispatchToProps
    dispatch => ({
        // deleteElement: (elem) =>{
        //     dispatch({type: 'DELETE_PERIOD', payload: elem})
        // }
    })
)(MainBody)