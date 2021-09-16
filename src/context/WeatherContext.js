import React from 'react'
import {createContext} from "react"
import {locations} from "../location/Location";


const WeatherContext = createContext();

export const WeatherProvider= ({children})=>{

     const values = {locations}


    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext
