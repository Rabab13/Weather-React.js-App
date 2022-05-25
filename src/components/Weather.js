import React  from 'react';



const Weather = (props) => {

        return(
            <>
            <div className="info">
            {/* Render weather data  */}
            {props.temp && 
            <p className="weather">Temperature:
                <span className="weather-data">{props.temp}C</span>
            </p>}
            {props.city && 
            <p className="weather">
                City: 
                <span className="weather-data">{props.city}</span>
            </p>}
            {props.country && 
            <p className="weather">
                Country: 
                <span className="weather-data">{props.country}</span>
            </p>}
            {props.description && 
            <p className="weather">
                Description: 
                <span className="weather-data">{props.description}</span>
            </p>}
            {props.wind && 
            <p className="weather">
                Wind Speed: 
                <span className="weather-data">{props.wind}km/h</span>
            </p>}
            {props.humidity && 
            <p className="weather">
                Humidity: 
                <span className="weather-data">{props.humidity}%</span>
            </p>}
            {props.pressure && 
            <p className="weather">
                Pressure: 
                <span className="weather-data">{props.pressure}hPa</span>
            </p>}
            {props.error && 
            <p className="weather">
                ! 
                <span className="weather-data">{props.error}</span>
            </p>}
            </div>
            </>
        )
    }


export default Weather;