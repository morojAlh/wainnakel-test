import React from 'react';
import { Slide } from 'react-slideshow-image';
import {Image} from 'react-bootstrap';

const properties = {
  duration: 5000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = (props) => {
    return (
      <div className="slideShow">
        <Slide {...properties}>
          <div className="each-slide" >
            <a href={props.imageLink}>
                <Image src={props.images[0]} rounded/>
            </a>
          </div>
          <div className="each-slide">
            <a href={props.imageLink}>
                <Image src={props.images[1]} rounded/>
            </a>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;