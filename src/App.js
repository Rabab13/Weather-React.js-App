import React, { Component } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

// Get API key from https://home.openweathermap.org/api_keys then define it.
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
const API_KEY = "e8d2f7734859dbb8f2f4606b1ff76a71"

class App extends Component {

  //Create empty state to full it with weather data to render it.
  state = {
    temp : '',
    city: '',
    country: '',
    description: '',
    wind:'',
    humidity:'',
    pressure:'',
    error:''
  }
  //Create func to get the weather and send it to the component through props.
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    //If you entered the city and country will give you weather data of it
    const API_Link =`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}lat=35&lon=139&appid=${API_KEY}&units=metric`

    //Get weather data from API
    const api = await fetch(API_Link)
    const jsonData = await api.json();
    console.log(jsonData)

    //update state jsonData
    city && country ? 
      this.setState({
        temp : jsonData.main.temp,
        city: jsonData.main.name,
        country: jsonData.sys.country,
        description: jsonData.weather.description,
        wind:jsonData.wind.speed,
        humidity:jsonData.main.humidity,
        pressure:jsonData.main.pressure,
        error:''
      }) : this.setState({
        temp : '',
        city: '',
        country: '',
        description: '',
        wind:'',
        humidity:'',
        pressure:'',
        error:'Please Fill Input Field.'
    });
  }

  render() {
  return (
    <div className="App">
      <div className="form-container">
      {/* Send the getWeather func to the Form comp. */}
      <Form getWeather={this.getWeather}/>
      {/* Render jsonData */}
      <Weather    
        temp ={this.state.temp}
        city ={this.state.city}
        country ={this.state.country}
        description ={this.state.description}
        wind = {this.state.wind}
        humidity = {this.state.humidity}
        pressure = {this.state.pressure}
        error = {this.state.error}/>
    </div>
    </div>
  );
}
}
export default App;
