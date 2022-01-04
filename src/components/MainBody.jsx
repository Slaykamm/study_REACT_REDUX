import axios from 'axios';
import React, {useState} from 'react';

import _ from 'lodash'
import { connect } from 'react-redux'
import MyInput from './UI/input/MyInput';


//import data from '../resource/city3.json'
//import data from '../resource/city.list.json'






import './style/MainBody.css'
import HourlyDeploy from './HourlyDeploy';

const MainBody = (props) => {
const APIkey = '16da20756bc63384418e1c8dc93e50a6'
const [isLoaded, setIsLoaded] = useState('')

//--------------------------REDUX NOTES





// console.log('2',store.getState())

// store.subscribe(() =>{
//     console.log('subscribe', store.getState())
// })

// store.dispatch({type:'ADD_DATA', payload: {'weatherPeriod': '1'} })
// store.dispatch({type:'CHANGE_DATA', payload: {'weatherPeriod': '2'} })


//------------------REDUX NOTES-------------------------------------


const [reduxInput, setReduxInput] = useState('')

 

function addLibrary(e) {


    e.preventDefault()

    props.deleteElement(reduxInput)
    setReduxInput('')

}


console.log('state', props)



//------------------------------------------


//----------------------------------------------------


    if (isLoaded==0){
        axios.post(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${APIkey}`).then(resp => {
            setIsLoaded(resp.data)


        })

    }

    let newObject = _.map(isLoaded, function(item){
        return item
    })
    
    //loadAsh - вернули все в массиве. потеряли ключи
    //console.log("test2", isLoaded, newObject)







    return (
        <div className='MainBody'>
            <p>Hello World</p>
            <h1>Добро пожаловать на сайт. Вы можете искать песню слева и читать текст</h1>

            <h2>Тест Редакса</h2>

                        
            <MyInput
            value = {reduxInput}
            placeholder='REDUX TEST'
            onChange={e => {setReduxInput(e.target.value)}}
            
            />


            <button 
                onClick={addLibrary}>
                    Button Delete from Redux

                </button>
                            


            <HourlyDeploy period={props.period} city={props.city} country={props.country}/>

        </div>
    );
};




export default connect(
    //mapStateToProps
    state => ({
        period: state.period,
        country: state.country, 
        city: state.city
    
    }),


    //mapDispatchToProps
    dispatch => ({
        // deleteElement: (elem) =>{
        //     dispatch({type: 'DELETE_PERIOD', payload: elem})
        // }
    })
)(MainBody)