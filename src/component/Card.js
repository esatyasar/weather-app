import React, {useEffect,useContext} from 'react'
import axios from "axios"
import WeatherContext from '../context/WeatherContext'

function Card() {
    
    const card = useContext(WeatherContext)
    

    return (
        <div>
            {card.map((item,index) =>{
                return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${item.lat}&lon=${item.lon}&exclude=weekly&appid=a03f5795b168886ec75b7203ed0a4e3c`)
            })}
            
        </div>
    )
}

export default Card
