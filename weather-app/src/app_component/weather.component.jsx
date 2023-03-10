import React from "react";

const Weather = (props) => {
    return(
        <div className="container ">
          <div className="cards" pt-4 py-2>
              <h1>{props.city}</h1>
              <h5 className="py4">
                  <i className={`wi ${props.weatherIcon} display-1`}></i>
              </h5>
              {props.celsius ? (
          <h1 className="py-2">{props.celsius}&deg;</h1>
        ) : null}
              { /**show nax and min temp */}
              
            {minmaxTemp(props.temp_min,props.temp_max)}
            
              <h4 className="py3">{props.description}</h4>
          </div>
        </div>
    );
}


function minmaxTemp(min,max){
    if(min && max){
    return(
        <h3>
            <span className="px4">{min}&deg;</span>
            <span className="px4">{max}&deg;</span>
        </h3>
    );
}
}

export default Weather;