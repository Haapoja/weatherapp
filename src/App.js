import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';



const API_KEY = "ef07efbcf33454184cffe2ea8685ea32";



class App extends Component {
/*constructor(){ apperently there is no need for this in react 16
  super(), or is, but you can set initial state without it
}*/

  state={
temperature: "",
city: "",
country:"",
humidity:"",
description:"",
error: "",
}

  //arrow functions allow you to use "this" keyword independently, means this is bound to the class component
  getWeather = async (e) => {
    e.preventDefault();//prevents default behavior of the component, IOW: prevents fullpage refresh on getWeather
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&id=524901&APPID=${API_KEY}`);
    const data=await api_call.json();
 
    if (city && country){ //if either of the values render true, then render the code. otherwise program crashes when running method without inputting location
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      windspeed:data.wind.speed,
      error:""

    });
  }else{
    this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      windspeed:undefined,
      error:"Enter a location you dumbfuck"
  });
    }
  }
  render() {
    return (
      
      <div className=" contrainer">
      <div className="App">
     
      <Titles className="title" />
      <Form getWeather={this.getWeather}
     />
      <Weather
       temperature={this.state.temperature}
       city={this.state.city}
       country={this.state.country}
       humidity={this.state.humidity}
       windspeed={this.state.windspeed}
       description={this.state.description}
       error={this.state.error}
       />
       </div>
       </div>
     

    );
  }
}

export default App;
