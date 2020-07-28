import React from 'react';
import './App.css';
const Card = props =>{
return(
  <div class="card text-center shadow">
      <div class="overflow">
          <img src={props.imgsrc} alt="" class="card-img-top" />
      </div>
      <div className="card-body text-dark">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text text-secondary">
            {props.text}
          </p>
          <span className="btn btn-outline-success">Go Anywhere</span>
      </div>
  </div>  
);
}
export default Card;