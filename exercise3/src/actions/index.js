import axios from 'axios';

const API_KEY ='55b00372e8a03df3802d7489c3a86dcc'; // API KEY FROM WEBPAGE
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url=`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

   
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}