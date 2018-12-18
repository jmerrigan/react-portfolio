import React, { Component } from 'react';
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import AboutPage from './AboutPage'
import Skills from './Skills'
import './App.css';

class App extends Component {

  render() {
      return (
        <div className="App">
          <div className="landingPage">
            <Navbar />
            <Landingpage />
          </div>
          <AboutPage/>
          <Skills />
        </div>
      );
    

  }
}

export default App;
