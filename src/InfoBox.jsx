import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({info}) {
    const imageUrl = 'weather.jpg'; // Replace with your image URL

    // Function to get weather icon based on temperature and weather condition
    const getWeatherIcon = () => {
        const temp = parseFloat(info.temp);
        const weather = info.weather.toLowerCase();
        
        if (weather.includes('rain') || weather.includes('drizzle')) {
            return <UmbrellaIcon sx={{ fontSize: 40, color: '#2196F3' }} />;
        } else if (weather.includes('thunderstorm') || weather.includes('storm')) {
            return <ThunderstormIcon sx={{ fontSize: 40, color: '#9C27B0' }} />;
        } else if (weather.includes('cloud')) {
            return <CloudIcon sx={{ fontSize: 40, color: '#607D8B' }} />;
        } else if (temp <= 15) {
            return <AcUnitIcon sx={{ fontSize: 40, color: '#00BCD4' }} />;
        } else if (temp >= 25) {
            return <WbSunnyIcon sx={{ fontSize: 40, color: '#FF9800' }} />;
        } else {
            return <WbSunnyIcon sx={{ fontSize: 40, color: '#FFC107' }} />;
        }
    };

    return (
        <div className='InfoBox'>
            <div className='card-container'>
                <Card sx={{ 
                    maxWidth: 500, 
                    width: '90vw',
                    maxHeight: '400px',
                    margin: '0 auto', 
                    boxShadow: 3, 
                    borderRadius: 2,
                    overflow: 'hidden'
                }}>
                    <CardMedia
                        sx={{ height: 120 }}
                        image={imageUrl}
                        title="green iguana"
                    />
                    <CardContent sx={{ padding: '16px' }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: 1,
                            marginBottom: '12px'
                        }}>
                            {getWeatherIcon()}
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                            color: 'text.secondary',
                            lineHeight: 1.4,
                            fontSize: '0.9rem'
                        }}>
                            Temperature: {info.temp}°C<br />
                            Humidity: {info.humidity}%<br />
                            Min Temp: {info.tempMin}°C<br />
                            Max Temp: {info.tempMax}°C<br />
                            Feels Like: {info.feelsLike}°C<br />
                            Weather Condition: {info.weather}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
