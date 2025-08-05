# 🌤️ Weather Dashboard Application

A modern, responsive weather application built with React and Material-UI that provides real-time weather information with an intuitive user interface.

![Weather App Demo](https://via.placeholder.com/800x400/74b9ff/ffffff?text=Weather+Dashboard+Screenshot)

## ✨ Features

- 🌍 **Real-time Weather Data** - Get current weather information for any city worldwide
- 🎨 **Dynamic Weather Icons** - Context-aware icons that change based on weather conditions and temperature
- 🖼️ **Random Weather Images** - Beautiful, random weather-related images from Unsplash
- 📱 **Responsive Design** - Fixed viewport layout that works perfectly on all devices
- 🎯 **Non-scrollable Interface** - Clean, dashboard-style layout that fits any screen
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast development and builds
- 🔍 **Smart Search** - Easy city search with error handling and validation

## 🚀 Live Demo

[View Live Demo](https://your-deployed-app-link.vercel.app) *(Replace with your actual deployment link)*

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **UI Library**: Material-UI (MUI) v7
- **Build Tool**: Vite
- **Styling**: CSS3, Material-UI Components
- **API**: OpenWeatherMap API
- **Icons**: Material-UI Icons
- **Images**: Unsplash API
- **Language**: JavaScript (ES6+)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Get API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your API key
4. Copy your API key

### Step 4: Configure API Key
1. Open `src/SearchBox.jsx`
2. Replace the API_KEY with your actual key:
```javascript
const API_KEY = 'your_api_key_here';
```

### Step 5: Run the Application
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

## 🎮 Usage

1. **Search for a City**: Enter any city name in the search field
2. **View Weather Data**: Get comprehensive weather information including:
   - Current temperature
   - Humidity levels
   - Minimum and maximum temperatures
   - "Feels like" temperature
   - Weather conditions
3. **Dynamic Icons**: Icons automatically change based on:
   - Temperature (hot/cold)
   - Weather conditions (rain, clouds, storms)
4. **Visual Appeal**: Each search displays a new random weather-related background image

## 🏗️ Project Structure

```
src/
├── components/
│   ├── WeatherApp.jsx      # Main application component
│   ├── SearchBox.jsx       # Search input and API integration
│   ├── InfoBox.jsx         # Weather information display
│   └── MapBox.jsx          # Map component (optional)
├── styles/
│   ├── App.css
│   ├── InfoBox.css
│   ├── SearchBox.css
│   └── index.css
├── App.jsx                 # Root component
└── main.jsx               # Application entry point
```

## 🌟 Key Features Breakdown

### Weather Icons Logic
```javascript
// Icons change based on conditions:
- Temperature ≤ 15°C → ❄️ Snow icon (Cold)
- Temperature ≥ 25°C → ☀️ Sun icon (Hot)
- Rain/Drizzle → ☂️ Umbrella icon
- Thunderstorm → ⛈️ Storm icon
- Cloudy → ☁️ Cloud icon
- Default → ☀️ Sun icon (Moderate)
```

### API Integration
- **Weather Data**: OpenWeatherMap Current Weather API
- **Geocoding**: OpenWeatherMap Geocoding API for coordinates
- **Error Handling**: Comprehensive error management with user alerts
- **Loading States**: Visual feedback during API calls

## 📱 Responsive Design

- **Desktop**: Full-width card with optimal spacing
- **Tablet**: Responsive card that adapts to screen size
- **Mobile**: Compact layout optimized for small screens
- **Fixed Layout**: No scrolling required, everything fits in viewport

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Environment Variables
Set your API key as an environment variable for production:
- `VITE_WEATHER_API_KEY=your_api_key_here`

## 🔮 Future Enhancements

- [ ] 7-day weather forecast
- [ ] Interactive maps with Mapbox
- [ ] Location-based weather (geolocation)
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Multiple city comparison
- [ ] Dark/light theme toggle
- [ ] Offline support with service workers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek**
- GitHub: [@Abhishek091204](https://github.com/Abhishek091204)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Material-UI](https://mui.com/) for the beautiful component library
- [Unsplash](https://unsplash.com/) for high-quality weather images
- [Vite](https://vitejs.dev/) for the fast build tool

## 📊 Project Stats

- **Lines of Code**: ~300+
- **Components**: 4 main components
- **API Endpoints**: 2 (Weather & Geocoding)
- **Dependencies**: Material-UI, React, Vite
- **Build Size**: ~500KB (optimized)

---

⭐ **Star this repository if you found it helpful!**

*Made with ❤️ and ☕ by Abhishek*
