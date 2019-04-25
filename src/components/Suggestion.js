import React from 'react';
import google from '../images/google.svg';
import upload from '../images/upload.svg';
import favorite from '../images/favorite.svg';
import picture from '../images/picture.svg';
import info from '../images/info.svg';
import controlsLight from '../images/controlsLight.png';
import '../App.css';
import Map from '../components/Map';
import {Button, Container, Row,Col} from 'react-bootstrap';
import Slideshow from './Slideshow';


const Suggestion = (props) => {
      return( 
        <div className="suggestionBackground">
            <div className="info">
                <h4> {props.restaurantInfo.name}</h4>
                <p>{props.restaurantInfo.cat}</p>
                <div className="infoTab">
                    <Container>
                    <Row>
                        <Col><a href={props.googleMapUrl}><img src={google} className="infoIcon" alt="google map"/></a></Col>|
                        <Col><img src={upload} className="infoIcon" alt="upload"/></Col>|
                        <Col><img src={favorite} className="infoIcon" alt="favorite"/></Col>|
                        <Col><a href={props.restaurantInfo.link.toString()}><img src={picture} className="infoIcon" alt="restaurant"/></a></Col>|
                        <Col><img src={info} className="infoIcon" alt="info"/></Col>
                    </Row>
                    </Container>
                </div>
            </div>

            <div className="displayMap">
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `350px`}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    restaurantInfo={props.restaurantInfo}
                />
            </div>

            <div className="displaySlideshow">
                <Container>
                    <Row>
                        <Col xs={6}>
                            <Map
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `350px`}} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                restaurantInfo={props.restaurantInfo}
                            />
                        </Col>
                        <Col xs={6}>  
                            <Slideshow
                            images={props.restaurantInfo.image}
                            imageLink={props.restaurantInfo.link.toString()}
                            />
                            <Button variant="light" className="googleMapButton" href={props.googleMapUrl}>Goolge Maps فتح في</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
                <Button variant="light" size="lg" className="settingButtonS"><img src={controlsLight} width="30px" alt="setting"/></Button>
                <Button variant="light" size="lg" className="suggestionButtonS" onClick={() => props.getSuggestion()}>اقتراح اخر</Button>
        </div>
    )
  }

export default Suggestion;
