import React, { useEffect } from 'react';
import {fetchWeatherData} from './features/weather/weatherSlice';
import { useDispatch, useSelector } from "react-redux";
import { WeatherForecast } from './components/weatherForecast';
import './App.css';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function App() {

  const dispatch =  useDispatch()

  useEffect(()=> {
    dispatch(fetchWeatherData());
  }, [])

  const [City, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <div className="dflex">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={City}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={10}>london</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <WeatherForecast />
      </div>
    </div>
  );
}

export default App;
