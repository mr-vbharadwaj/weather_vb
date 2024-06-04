import './App.css';
import { logo} from './assets/img/imports';
import React, { useEffect, useState } from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);

            // Move the API call inside the success callback
            fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
             .then(res => res.json())
             .then(result => {
                setData(result);
                console.log(result); // Log the result to check if it's being fetched correctly
              })
             .catch(error => console.error('Error fetching weather data:', error));
          },
          (error) => {
            console.error('Error accessing geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Weather App</h4>
        <div className='App-logo'><img src={logo}></img></div>
      </header>
      <main className='main-body'>
        <div className='content'>
          <div className='principal'>
            <div className="input-wrapper">
              <input placeholder="Enter a city name" type="text" name="city" className="cityInput" autoComplete="off"></input>
              <button type="submit" className="searchButton">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 
                    18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
                    </path>
                </svg>
              </button>
            </div>
          </div>
          <div className='secondary'>

          </div>
        </div>
      </main>
    </div>
  );
}



export default App;
