import React  from 'react';

//Form components will render the form only no need to use state here so we used statLess component func
const Form = (props) => {

        return(
            <>
            {/* call getWeather func which will be created on App.js  through props*/}
            <form onSubmit={props.getWeather}> 
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button type="submit">Check Weather</button>
            </form>
            </>
        )
    }


export default Form;