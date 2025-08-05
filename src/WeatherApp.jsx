import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
    let [weatherInfo,setWeatherInfo] = useState({
        city: 'Unknown',
        temp: 0,
        humidity: 0,
        tempMin: 0,
        tempMax: 0,
        feelsLike: 0,
        weather: 'Normal'
    });
    const updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div style={{ 
            textAlign: 'center', 
            backgroundColor: '#ffffff', 
            height: '100vh', 
            width: '100vw',
            padding: '20px',
            color: '#333',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            boxSizing: 'border-box'
        }}>
            <h2 style={{ color: '#2c3e50', margin: '0 0 20px 0', fontSize: '2rem' }}>Weather App</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}