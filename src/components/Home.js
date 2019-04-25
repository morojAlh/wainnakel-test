import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import logo from '../images/logo.png';
import wainnakel from '../images/wainnakel.png';
import controls from '../images/controls.png';

class Home extends Component {

  getSuggestion(){
      this.props.getSuggestion();
      this.props.setActivePage('suggestion')
  }

  render(){
      return(
          <div className="home">
            <div className="homeLogo">
              <img src={logo} alt="logo"/><br/>
              <img src={wainnakel} alt="wainnakel"/><br/>
            </div>
            <Button variant="light" size="lg" className="settingHome"><img src={controls} width="30px" alt="setting"/></Button>
            <Button variant="light" size="lg" className="suggestionHome" onClick={() => this.getSuggestion()}>اقتراح</Button>
          </div>
      )
  }
}

export default Home;