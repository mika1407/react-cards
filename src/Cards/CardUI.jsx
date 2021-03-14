import React from 'react';
import './card-style.css';

const Card = props =>{
  return(
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae! Saepe, nulla veniam fugit earum ut perferendis quis deserunt tempora?
        </p>
        <a href="#" className="btn btn-outline-success">Go Anywhere</a>
      </div>
    </div>
  );
}

export default Card;