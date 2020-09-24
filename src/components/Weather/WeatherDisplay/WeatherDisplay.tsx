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
}

const WeatherDisplay: React.FunctionComponent<AcceptedProps> = (props) => {
    return (
        <div className="mainDivWeatherDisplay">
            <h2>Hello from WeatherDisplay</h2>
            {
                props.temperature === 0 && props.feelsLike === 0 && props.humidity === 0 && props.pressure === 0 ? (
                    <div>Fetch Current Weather in your location!</div>
                ) : (
                        <div>
                            <h6>Temperature: {props.temperature}</h6>
                            <h6>Feels Like: {props.feelsLike}</h6>
                            <h6>Humidity {props.humidity}</h6>
                            <h6>Pressure: {props.pressure}</h6>
                        </div>
                    )
            }
        </div >
    )
}

export default WeatherDisplay;