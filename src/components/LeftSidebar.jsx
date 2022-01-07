import React, {useState} from 'react';

import data from '../resource/city3.json'
//import data from '../resource/city.list.json'
import countries from '../resource/countries.json'


import _ from 'lodash'
import { connect } from 'react-redux'

import  './style/LeftSidebar.css'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';
import MyButton from './UI/button/MyButton';






const LeftSidebar = (props) => {

    const [cityName, setCityName] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [weatherPeriod, setWeatherPeriod] = useState('')
    
    const period = [
        {'id': 1, 'code': 1, 'name': 'Часовой прогноз'},
        {'id': 2, 'code': 2, 'name': 'Дневной прогноз'},
        {'id': 3, 'code': 3, 'name': 'Недельный прогноз'}
    ]


    
const sortedCountry = _.sortBy(countries,['name'])
const filteredObj = _.sortBy(_.filter(data, {"country": selectedCountry}),['name'])





function clearForm(e){
    e.preventDefault()

    let countryID = _.find(countries,{'name': cityName.toUpperCase()});
    console.log("finde", countryID.id)


    let countryID2 = _.filter(countries,{'name': cityName.toUpperCase()});
    console.log("filter", countryID2.id)

    setCityName('')

}



function setReduxSelectedCountry(country){
    setSelectedCountry(country)
    props.setReduxCountry(country)

}

function setReduxSelectedCity(city){
    setSelectedCity(city)
    const filtered_city = _.filter(filteredObj, {"name": city})

    props.setReduxCity(city, filtered_city)

}


function setReduxPeriod(item){
    setWeatherPeriod(item)
    props.setPeriod(item)
}



    return (
        <div className='leftSideBar'>
            <h3>Параметры для отображения</h3>
            <ul>
                <li>

                    <form>
                        <MyInput
                        
                        value={cityName}
                        onChange={e => setCityName(e.target.value)}
                        placeholder="Введите название страны"
                        
                        />

                        <MyButton
                            type="submit" 
                            onClick={clearForm}
                            buttonTitle='Искать'
                        />  
       




                    </form>
                </li>  

                <li>

                <MySelect 
                value={selectedCountry}
                sortedCountry={sortedCountry} 
                defaultValue='Выберите страну'
                onChange={country => setReduxSelectedCountry(country)}
            />
 
                </li>

                <li>

                <MySelect 
                value={selectedCity}
                sortedCountry={filteredObj} 
                defaultValue='Выберите город'
                onChange={city => setReduxSelectedCity(city)}
            />
 
                </li>

                <li>

                <MySelect 
                value={weatherPeriod}
                sortedCountry={period} 
                defaultValue='Выберите период'

                onChange={item => setReduxPeriod(item)}
             />
 
                </li>
             
            </ul>

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
        setPeriod: (elem) =>{
            dispatch({type: 'SET_PERIOD', payload: elem})
        },
        setReduxCountry: (country) =>{
            dispatch({type: 'SET_COUNTRY', payload: country})
        },
        setReduxCity: (city, filtered_city ) =>{
            dispatch({type: 'SET_CITY', payload: city}),
            dispatch({type: 'PICK_INFO', payload: filtered_city})
        }
    })
)(LeftSidebar)