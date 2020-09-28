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
                            <h5>Temperature: {props.temperature} Kelvin, {(props.temperature - 273.15).toFixed(2)} Celsius, {(((props.temperature - 273.15) * 1.8) + 32).toFixed(2)} Fahrenheit</h5>
                            <h5>Feels Like: {props.feelsLike} Kelvin, {(props.feelsLike - 273.15).toFixed(2)} Celsius, {(((props.feelsLike - 273.15) * 1.8) + 32).toFixed(2)} Fahrenheit</h5>
                            <h5>Humidity: {props.humidity} Percent (%)</h5>
                            <h5>Pressure: {props.pressure} Atmospheric Pressure (hPa)</h5>
                            <h5>Wind Degree: {props.windDeg} Degrees (°)</h5>
                            <h5>Wind Speed: {props.windSpeed} Meters/Second, {(props.windSpeed * 3.6).toFixed(2)} Kilometers/Hour, {(props.windSpeed * 2.2369362920544).toFixed(2)} Miles/Hour</h5>
                        </div>
                    )
            }
        </div >
    )
}

export default WeatherDisplay;