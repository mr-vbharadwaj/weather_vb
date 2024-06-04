import './App.css';
import { logo, background } from './assets/img/imports';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Weather App</h4>
        <div className='App-logo'><img src={logo}></img></div>
      </header>
      <main className='main-body'>
        <div class="input-wrapper">
          <input placeholder="Enter a city name" type="text" name="city" class="cityInput" autocomplete="off" value=""></input>
          <button type="submit" class="fa fa-search"></button>
        </div>
      </main>
    </div>
  );
}

export default App;
