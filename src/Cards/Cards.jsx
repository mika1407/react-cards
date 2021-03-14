import React, {Component} from 'react'
import Card from './CardUI';

import img1 from "../assets/apple.jpg";
import img2 from "../assets/bengal.jpg";
import img3 from "../assets/hesa.jpg";

class Cards extends Component {
  render(){
    return(
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Apple"/>
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Tiger"/>
          </div>
          <div className="col-md-4" >
            <Card imgsrc={img3} title="Helsinki"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;