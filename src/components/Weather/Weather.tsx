import React from 'react';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import './Weather.css';
type WeatherState = {
    time: Date;
    latitude: number;
    longitude: number;
    weatherApiUrl: string;
    weatherApiKey: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
    windDeg: number;
    windSpeed: number;
    timezone: string
}

// if there were props to inherit, could go here
type AcceptedProps = {

}

// in the alligator brackets, props are always first, states second
class Weather extends React.Component<AcceptedProps, WeatherState> {
    // constructor(props: AcceptedProps) {
    //     super(props)
    //     this.state = {
    //         time: new Date(),
    //         latitude: 0,
    //         longitude: 0,
    //         weatherApiKey: 'a13bbaaa02d332737a2e5bc340b9b223',
    //         weatherApiUrl: ''
    //     }
    // }

    // from module, kept in for fun
    tick() {
        this.setState({
            time: new Date()
        })
    }

    // either have state set in constructor, or in componentWillMount(), executes before first mounting
    componentWillMount() {
        console.log('Executing componentWillMount:');
        this.setState({
            time: new Date(),
            // latitude: 0,
            // longitude: 0,
            weatherApiKey: 'a13bbaaa02d332737a2e5bc340b9b223',
            temperature: 0,
            feelsLike: 0,
            humidity: 0,
            pressure: 0,
            windDeg: 0,
            windSpeed: 0,
            timezone: ''
            // weatherApiUrl: ''
        })
        // this.setCoords() sets latitude, longitude, and weatherApiUrl
        this.setCoords();

        // this.asyncSetCoords()
        // console.log('Latitude:', this.state.latitude)
        // this.tick();
        // this.setState({
        //     time: new Date(),
        //     // latitude: 0,
        //     // longitude: 0,
        //     weatherApiKey: 'a13bbaaa02d332737a2e5bc340b9b223'
        // })
        // this.setCoords()
    }

    componentDidMount() {
        console.log('Executing componentDidMount:')
        // this.fetchOpenWeatherApi sets temperature, feelslike, humidity, pressure
        // to ensure a load on (close to) render, I could try the not-so-great setTimeout way, but far from ideal
        // this.fetchOpenWeatherApi();
        // this.fetchOpenWeatherApi() // fetching in componentDidMount does not work, throws error
        // this.setCoords()
        // this is not the best way of ensuring the function has the data it needs from the setState latitude longitude fetch, but it does work for now ... ideally, refactor async / promise approach ... now, I just set the latitude, longitude, and weatherApiUrl all in the setCoords function

        // this.setState({
        //     weatherApiUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${this.state.weatherApiKey}`
        // })

        // setTimeout(() => {
        //     this.setState({
        //         weatherApiUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${this.state.weatherApiKey}`
        //     })
        // }, 500);
        // console.log('Latitude:', this.state.latitude)
        // a handy digital clock (from module)
        setInterval(() => this.tick(), 1000)
        // this will call current local coordinates on first render

        // this.setCoords()
        // this.setState({
        //     weatherApiUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${this.state.weatherApiKey}`
        // })
    }

    // find a way to call coordinates from geolocation for the fetch
    setCoords = () => {
        console.log('Executing setCoords:')
        if ('geolocation' in navigator) {
            // geolocation is available
            console.log('Geolocation is available:')
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('Position:', position)
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    weatherApiUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.state.weatherApiKey}`
                })
            })
        } else {
            // geolocation is not available
            console.log('Geolocation is not available, or not supported by this browser.')
            alert('Geolocation is not available, or not supported by this browser.')
        }
    }

    // async version ... ?
    asyncSetCoords = async () => {
        // console.log('Executing asyncSetCoords:')
        // let response: any = await navigator.geolocation.getCurrentPosition((position) => {
        //     this.setState({
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude
        //     })
        // })
        // if (!response.ok) {
        //     throw new Error(response.status)
        // } else {
        //     this.setState({
        //         latitude: currentLatitude,
        //         longitude: currentLongitude
        //     })
        // }

        // console.log(response) // why does response log undefined?
    }

    // fetch to Open Weather API
    fetchOpenWeatherApi = () => {
        fetch(this.state.weatherApiUrl)
            .then((response) => {
                return response.json()
            })
            .then((openWeatherApiResults) => {
                console.log(openWeatherApiResults)
                console.log(openWeatherApiResults.current)
                console.log(openWeatherApiResults.timezone)
                // console.log(openWeatherApiResults.current.feels_like)
                // console.log(openWeatherApiResults.current.humidity)
                // console.log(openWeatherApiResults.current.pressure)
                // console.log(openWeatherApiResults.current.sunrise)
                // console.log(openWeatherApiResults.current.sunset)
                // console.log(openWeatherApiResults.current.weather[0])
                // console.log(openWeatherApiResults.current.weather[0].main)
                // console.log(openWeatherApiResults.current.weather[0].description)
                // console.log(openWeatherApiResults.current.weather[0].icon)
                this.setState({
                    temperature: openWeatherApiResults.current.temp,
                    feelsLike: openWeatherApiResults.current.feels_like,
                    humidity: openWeatherApiResults.current.humidity,
                    pressure: openWeatherApiResults.current.pressure,
                    windDeg: openWeatherApiResults.current.wind_deg,
                    windSpeed: openWeatherApiResults.current.wind_speed,
                    timezone: openWeatherApiResults.timezone
                })
            })
            // .then(() => {
            //     console.log('Current State:', this.state)
            // })
            .catch((error) => console.log('Error:', error))
    }

    render() {
        return (
            <div className="mainDivWeather">
                {/* {console.log('In mainDivWeather:')} */}
                {/* {console.log(navigator.geolocation)} */}
                {/* {console.log(this.state.latitude)} */}
                <h2>Hello from Weather</h2>
                <h4>Current Time: {this.state.time.toLocaleTimeString()}</h4>
                <h4>Current Latitude: {this.state.latitude}</h4>
                <h4>Current Latitude: {this.state.longitude}</h4>
                <button
                    className="checkWeatherStateButton"
                    onClick={() => {
                        console.log(
                            'Stored latitude:', this.state.latitude,
                            'Stored longitude:', this.state.longitude,
                            // 'Stored weatherApiUrl:', this.state.weatherApiUrl,
                            // 'Stored weatherApiKey:', this.state.weatherApiKey,
                            'Stored temperature:', this.state.temperature,
                            'Stored feelsLike:', this.state.feelsLike,
                            'Stored humidity:', this.state.humidity,
                            'Stored pressure:', this.state.pressure,
                            'Stored windDeg:', this.state.windDeg,
                            'Stored windSpeed:', this.state.windSpeed,
                            'Stored timezone:', this.state.timezone
                        )
                    }
                        // console.log('This button will call the geolocation.')
                    }
                >Check WeatherState (console.log)</button>
                <br />
                <br />
                <button
                    className="callGeolocationButton"
                    onClick={() => this.setCoords()
                        // console.log('This button will call the geolocation.')
                    }
                >Re-Fetch Current Location (console.log)</button>

                <br />
                <br />

                <button
                    className="fetchOpenWeatherApiButton"
                    onClick={() => this.fetchOpenWeatherApi()
                        // console.log('This button will call the geolocation.')
                    }
                >Fetch Open Weather Api</button>
                {/* {console.log(this.state.latitude)} */}
                <br />
                <br />
                <div>
                    <WeatherDisplay
                        temperature={this.state.temperature}
                        feelsLike={this.state.feelsLike}
                        humidity={this.state.humidity}
                        pressure={this.state.pressure}
                        windDeg={this.state.windDeg}
                        windSpeed={this.state.windSpeed}
                        timezone={this.state.timezone}
                    />
                    {/* <WeatherDisplay latitude={this.state.latitude}/> */}
                </div>
                {/* <WeatherDisplay latitude={this.state.latitude} longitude={this.state.longitude} time={this.state.time} /> */}
            </div >
        )
    }
}

export default Weather;