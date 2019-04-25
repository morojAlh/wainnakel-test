import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Home from './components/Home';
import Suggestion from './components/Suggestion';
import NavigationBar from './components/NavigationBar';

class App extends Component {

  constructor(){
    super();
    this.state = {
      latitude: '',
      longitude: '',
      restaurantInfo: '',
      googleMapUrl: '',
      activePage: 'home'
    }
  }

  getSuggestion(){
    navigator.geolocation.getCurrentPosition( position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }, () => {
        let {latitude, longitude} = this.state;

          let urlAPI = `https://accesscontrolalloworiginall.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${latitude},${longitude}&get_param=value`;
          fetch(urlAPI)
            .then(response => response.json())
            .then(response => {
              console.log(response);
              this.setState({
                restaurantInfo: response
              }, () => this.setState({
                googleMapUrl: `https://www.google.com/maps?q=${this.state.restaurantInfo.lat},${this.state.restaurantInfo.lon}`
              }))
            })
            .catch(error => {
              console.log(error);
            })
      })
    });
  }

  setActivePage(activePage){
    this.setState({ activePage })
  }

  renderActivePage(){
    if (this.state.activePage === 'home'){
      return (
        <Home 
        getSuggestion={this.getSuggestion.bind(this)}
        setActivePage={this.setActivePage.bind(this)}
        />
      )
    } else if ((this.state.restaurantInfo) && this.state.activePage === 'suggestion'){
      return (
        <div>
          <Suggestion 
          restaurantInfo={this.state.restaurantInfo}
          googleMapUrl={this.state.googleMapUrl}
          getSuggestion={this.getSuggestion.bind(this)}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {(this.state.activePage !== 'home') ? <NavigationBar/> : ''}
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              {this.renderActivePage()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;