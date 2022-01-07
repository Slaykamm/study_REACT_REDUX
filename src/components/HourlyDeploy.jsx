import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import _, { round } from 'lodash'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import cl from '../components/style/HourlyDeploy.module.css'

function timeConverter(UNIX_timestamp, version){
  
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();


    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    var time_date = date + ' ' + month + ' ' + year;
    var time_hour = hour + ':' + min ;//+ ':' + sec ;

    switch(version){
        case 1:
            return time
        case 2:
            return time_hour
        case 3:
            return time_date
        default:
            return "ERROR"


    }

  }


const HourlyDeploy = (props) => {
    let [weatherInfo, setWeatherInfo] = useState('')
    const APIKey = 'a0d2f7cec5cb1d7c2f61c0cdb4b0a809'

    
    let long = props.choosenCity[0]
    
    if (!weatherInfo){
            console.log("testtest")
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${long.coord['lat']}&lon=${long.coord['lon']}&exclude=hourly,daily&appid=${APIKey}`).then(resp =>{
                console.log(resp.data)
                setWeatherInfo(resp.data)
            })
        

    }

    return (
        <div>


            <h2 className={cl.titleInfo}> Поминутный прогноз на следующий час</h2>

            <Table style={{background:'white', width:'60%', margin:'0 auto'}} striped bordered hover>
                <thead>
                    <tr align="center">
                        <th>Выбранная страна</th>
                        <th>Выбранный город</th>
                    </tr>   
                </thead>


                <tbody>
                    <tr align="center">
                        <td>{props.country}</td>
                        <td>{props.city}</td>
                    </tr>
                </tbody>
            </Table>





            <h3 className={cl.innerInfo}>Общие данные</h3>
                            
            {weatherInfo ?
                <Table style={{background:'white', width:'85%', margin:'0 auto'}} striped bordered hover responsive >
                    <thead>
                        <tr align="center">
                            <th>Дата</th>
                            <th>Облачность, %</th>
                            <th>Осадки подр.</th>
                            <th>Теплоощущение, C</th>                        
                            <th>Отн. Влажность, %</th>
                            <th>Давление, Па</th>
                            <th>Восход</th>
                            <th>Закат</th>
                            <th>Температура, С</th>
                            <th>ср. УФ акт.</th>
                            <th>Скорость ветра, м/с</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr align="center">
                            <td>{timeConverter(_.get(weatherInfo, 'current.dt'), 3)}</td>
                            <td>{_.get(weatherInfo, 'current.clouds')}</td>
                            <td>{_.get(weatherInfo, 'current.weather[0].description')}</td>
                            <td>{round(_.get(weatherInfo, 'current.feels_like')-273, 2)}</td>
                            <td>{_.get(weatherInfo, 'current.humidity')}</td>
                            <td>{_.get(weatherInfo, 'current.pressure')}</td>
                            <td>{timeConverter(_.get(weatherInfo, 'current.sunrise'), 2)}</td>
                            <td>{timeConverter(_.get(weatherInfo, 'current.sunset'), 2)}</td>
                            <td>{round(_.get(weatherInfo, 'current.temp')-273,1)}</td>
                            <td>{_.get(weatherInfo, 'current.uvi')}</td>
                            <td>{_.get(weatherInfo, 'current.wind_speed')}</td>

                        </tr>
                    </tbody>

                </Table>

            :
                <h3 className={cl.innerInfo}> Ожидаем загрузку данных  </h3>

            }

                <h3 className={cl.innerInfo}>Поминутно</h3>

                <div style={{width:"95%", margin:'0 auto'}}>
                    {weatherInfo ?


                        <Table style={{background:'white', margin:'0 auto'}} striped bordered hover responsive >
                            <thead>

                                <tr >
                                    <th>Время</th>

                                    {(_.get(weatherInfo, 'minutely')).map((item)=>
                                        <th key={item.dt+item.precipitation}>
                                            {timeConverter(item.dt,2)} 

                                        </th>
                                    )}
                                </tr>


                            </thead>
                            
                            <tbody>
                                <tr >
                                    <td style={{fontWeight:'bold'}}>Вероятность осадков, %</td>
                                    {(_.get(weatherInfo, 'minutely')).map((item)=>
                                        <td key={item.dt+item.precipitation}> 
                                        {item.precipitation} 
                                        </td>
                                    )}
                                </tr>

                            </tbody>

                        </Table>


                        :
                        <h3 className={cl.innerInfo}> Ожидаем загрузку данных  </h3>

                    }

                </div>




        </div>
    );
};

export default HourlyDeploy;