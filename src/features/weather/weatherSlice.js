import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchWeatherData = createAsyncThunk(
    'weatherData/fetchWeather',
    async (param) => {
        let res = await fetch(`http://api.weatherstack.com/current?access_key=21dc71525ff3845b39584ffeea22f9e2&query=${param}`)
        let result = await res.json();
        console.log(result);
        return result;
    }
)

const initialState = {
    data: [],
    status: 'idle',
}

export const weatherSlice = createSlice({
    name: "weatherData",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWeatherData.pending] : (state, action) => {
            state.status = 'pending';
        },
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        },
        [fetchWeatherData.rejected] : (state, action) => {
            state.status = 'rejected';
        },
    }
})

export default weatherSlice.reducer;