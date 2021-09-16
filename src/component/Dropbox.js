import React from 'react';
import {useContext} from "react"
import WeatherContext from '../context/WeatherContext';

function Dropbox() {

    const {locations} = useContext(WeatherContext) 

    return (
        <div>
            <select style={{width:"300px"}} name="location" id="location">
                {locations.map((item,index) =>
                 <option key={index} value ={item.name} >
                            {item.name}
                        </option>
                )}
            </select>
        </div>
    )
}

export default Dropbox
