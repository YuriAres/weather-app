import React, {useState} from 'react';
import Trad from './components/tradutor';
import Icon from './components/Icons';
import Humidity from './images/humidity.png'
import Feels_like from './images/feels_like.png'
import Pressure from './images/pressure_icon.png'
import Windy from './images/windy.png'
import './App.css';

const api = {
  key: "0e1a057b0233c3abcc07202b3f3fb28a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
      })
    }
  }

  const Datas = (datas) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    let day = days[datas.getDay()];
    let date = datas.getDate();
    let month = months[datas.getMonth()];
    let year = datas.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`
  }


  return (
    <div className="App">
      <header> <img src="https://nomadicways.travel/show/paarl-paarl/blog-image/Cloudy.png" className="img"/><span className="title">Weather<strong>APP</strong></span></header>
      <main>
        <div className="Search_box">
            <input type="text" className="Search" placeholder="Digite o nome de uma cidade.."  onChange={e => setQuery(e.target.value)} value={query}
            onKeyPress={search}/>

        </div>
        {(typeof weather.main != 'undefined') ? (
        <div>
        <div className="Top_box">
          <div className="location">
              {weather.name}, {weather.sys.country}
          </div>
          <div className="date">
              {Datas(new Date())}
          </div>
        </div>
        <div className="weather_box">
          <div className="temp"> {Math.round(weather.main.temp)}°c</div>
          <div className="weather"><Icon Condicao={weather.weather[0].id}></Icon><Trad Condicao={weather.weather[0].id}></Trad></div>
          </div>
        <div className="info_box">
          <div className="infos">
            <div>
                <span className="info"><img src={Feels_like} id="icons_1"/> <strong> Sensação Térmica: </strong>{Math.round(weather.main.feels_like)}°c </span>
                <span className="info"><img src={Humidity} id="icons_2"/><strong>Umidade do ar: </strong>{Math.round(weather.main.humidity)}% </span>
            </div>
            <div>
                <span className="info"><strong> <img src={Windy} id="icons_3"/> Velocidade do Vento: </strong>{weather.wind.speed} km/h </span>
                <span className="info"><img src={Pressure} id="icons_4"/><strong> Pressão Atmosferica: </strong>{weather.main.pressure} MPa </span>
            </div>
            </div>
        </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
