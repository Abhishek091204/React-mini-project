import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
export default function SearchBox({updateWeatherInfo}) {
    let [city, setCity] = useState('');
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'API_KEY';

    let getWeatherInfo = async () => {
        
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result={
                city: city,
                temp: jsonResponse.main?.temp || 'N/A',
                humidity: jsonResponse.main?.humidity || 'N/A',
                tempMin: jsonResponse.main?.temp_min || 'N/A',
                tempMax: jsonResponse.main?.temp_max || 'N/A',
                feelsLike: jsonResponse.main?.feels_like || 'N/A',
                weather: jsonResponse.weather?.[0]?.description || 'N/A',
            }
            console.log(result);
            return result;
        } catch (error) {
            console.error('Failed to fetch weather data:', error.message);
            alert('Failed to fetch weather data. Please check the API key or try again later.');
        }
    }
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(city);
        const newInfo = await getWeatherInfo();
        updateWeatherInfo(newInfo);
        setCity(''); // Clear the input field after submission
    }
    return (
        <div className='searchbox'>
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br /><br />
                <Button variant="contained" type='submit' startIcon={<SearchIcon />}>Search</Button>
            </form>
        </div>
    )
}












