# 🌤️ Weather App

A simple weather application built with React and Material-UI that shows current weather information for any city.

## Features

- Search for weather by city name
- Display current temperature, humidity, and weather conditions
- Dynamic weather icons based on temperature and conditions
- Clean, responsive design
- Random weather background images

## Technologies Used

- React 19
- Material-UI (MUI)
- Vite
- OpenWeatherMap API
- JavaScript (ES6+)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishek091204/Web-Development.git
```

2. Navigate to the project directory:
```bash
cd MATERIALUI/mini-project-react
```

3. Install dependencies:
```bash
npm install
```

4. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

5. Add your API key in `src/SearchBox.jsx`:
```javascript
const API_KEY = 'your_api_key_here';
```

6. Start the development server:
```bash
npm run dev
```

## Usage

1. Enter a city name in the search box
2. Click the "Search" button
3. View the weather information displayed on the card

## Weather Icons

The app displays different icons based on weather conditions:
- ☀️ Sunny (temperature ≥ 25°C)
- ❄️ Cold (temperature ≤ 15°C)
- ☂️ Rainy weather
- ⛈️ Thunderstorms
- ☁️ Cloudy weather

## Project Structure

```
src/
├── WeatherApp.jsx    # Main component
├── SearchBox.jsx     # Search input and API calls
├── InfoBox.jsx       # Weather display card
├── App.jsx
└── main.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Author

Abhishek - [@Abhishek091204](https://github.com/Abhishek091204)
