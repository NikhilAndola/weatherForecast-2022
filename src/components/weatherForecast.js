import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useSelector } from "react-redux";
import './styles.css'
import SunIcon from '../assets/icons/SunIcon'
import moment from 'moment';
// import Sun from '../assets/images/sun.png'

export const WeatherForecast = () => {

    const weatherData = useSelector(state => state);
    // let localtime_epoch = weatherData?.weather?.data?.location?.localtime_epoch;
    const localTime =  weatherData?.weather?.data?.location?.localtime;
    console.log("weatherData", weatherData, localTime);
  
    return (
    <div className='weather_main'>
        <Grid container sx={{width: '100%', height: '100%'}}>
            <Grid container sx={{height: '90%'}}>
                <Grid item xs={4} sx={{display:"flex", justifyContent:"center", alignItems: 'center', flexDirection:'column'}}>
                    <Typography variant='h6'>
                        {moment(localTime).format('ddd DD/MM/yyyy')}
                    </Typography>
                    <Typography variant='h4'>
                    {moment(localTime).format('hh:mm A')}
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{display:"flex", justifyContent:"center", alignItems:'center'}}>
                    <Typography variant='h1'>
                        {weatherData?.weather?.data?.current?.temperature}
                    </Typography>
                    <sub style={{fontSize:"40px"}}>˚C</sub>
                </Grid>
                <Grid item xs={4} pl={2} sx={{display:"flex", justifyContent:"center", alignItems:'center', flexDirection: 'column'}}>
                    <SunIcon />
                    <Typography>
                        {weatherData?.weather?.data?.current?.weather_descriptions[0]}
                    </Typography>
                </Grid>
            </Grid>
            <Grid xs={12} item sx={{height: "10%", display:"flex", justifyContent:"center", alignItems: 'center'}} >
                <Typography>
                    Wind: {weatherData?.weather?.data?.current?.wind_dir}{' '}{weatherData?.weather?.data?.current?.wind_speed}{' '}
                    {weatherData?.weather?.data?.request?.unit}/h
                </Typography>
            </Grid>
        </Grid>
    </div>
  )
}
