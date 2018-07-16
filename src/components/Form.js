import React from "react";
import "../App"
//statless component
const Form =props=>(
    
            <form onSubmit={props.getWeather} className="forms">
            <input type="text" name="city" placeholder="city.."/>
            <input type="text" name="country" placeholder="country..."/>
            <button>Get weather </button>
                </form>
)
export default Form;

/*      first version, can be written like this but why the fuck would i do so
class Form extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="city.."/>
            <input type="text" name="country" placeholder="country..."/>
            <button>Get weather </button>
                </form>
        )
    }
}
*/