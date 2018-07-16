import React from "react";
import "../App";


class Weather extends React.Component {
    render() {
        return (
            <div className="weather">{/*if props exist, display shit*/}
                {this.props.temperature && <p> Temperature: {this.props.temperature} °C </p>}
                {this.props.humidity && <p>  Humidity: {this.props.humidity} </p>}
                {this.props.windspeed && <p>  Windspeed: {this.props.windspeed} </p>}
                {this.props.description && <p>    Conditions: {this.props.description} </p>}
                {this.props.description === "mist" && <body className="misty"></body>}
                {this.props.description === "clear sky" && <body className="sunny"></body>}
                {this.props.description === "shower rain" && <body className="rainy"></body>}
                {this.props.description === "rain" && <body className="rainy"></body>}
                {this.props.description === "light rain" && <body className="rainy"></body>}
                {this.props.description === "scattered clouds" && <body className="cloudy"></body>}
                {this.props.description === "few clouds" && <body className="cloudy"></body>}
                {this.props.description === "broken clouds" && <body className="cloudy"></body>}
                {this.props.description === "thunderstorm" && <body className="thunder"></body>}
                {this.props.description === "snow" && <body className="snowy"></body>}
                
                
                {this.props.error && <p>{this.props.error} </p>}
            </div>
        )
    }
}
export default Weather;


 /*const Weather = (props) => {  this is a statless component, because the code above does not use state, it could also be written like this
    return (                    because this is a statless component, "this" cannot be used, automatic error
                                props will also cause an error, unless passed into the const as an argument
                                this can also be written without brackets and without return, just
                                "const weather = (props)=()"  only works with one element
                                "const weather = props=()" can also be written like this if it contains 1 argument
       
        <div>
            {props.temperature && <p> Temperature: {props.temperature} °C </p>}
            {props.humidity && <p>  Humidity: {props.humidity} </p>}
            {props.windspeed && <p>  Windspeed: {props.windspeed} </p>}
            {props.description && <p>    Conditions: {props.description} </p>}
            {props.error && <p>{props.error} </p>}
        </div >


    )

} 


*/

