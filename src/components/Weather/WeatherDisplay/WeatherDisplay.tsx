import React from 'react';
import './WeatherDisplay.css';

type AcceptedProps = {
    // time: Date;
    // latitude: number;
    // longitude: number;
    // weatherApiUrl: string;
    // weatherApiKey: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
    windDeg: number;
    windSpeed: number;
    timezone: string;
}

const WeatherDisplay: React.FunctionComponent<AcceptedProps> = (props) => {
    return (
        <div className="mainDivWeatherDisplay">
            <h2>Hello from WeatherDisplay</h2>
            {
                props.temperature === 0 && props.feelsLike === 0 && props.humidity === 0 && props.pressure === 0 && props.windDeg === 0 && props.windSpeed === 0 ? (
                    <div>
                        <p>
                            Click the 'Fetch Open Weather Api' Button to find out the current weather conditions in your location!
                        </p>
                    </div>
                ) : (
                        <div>
                            <h5>Timezone: {props.timezone}</h5>
                            <h5>Temperature: {props.temperature}</h5>
                            <h5>Feels Like: {props.feelsLike}</h5>
                            <h5>Humidity {props.humidity}</h5>
                            <h5>Pressure: {props.pressure}</h5>
                            <h5>Wind Degree: {props.windDeg}</h5>
                            <h5>Wind Speed: {props.windSpeed}</h5>
                        </div>
                    )
            }
        </div >
    )
}

export default WeatherDisplay;