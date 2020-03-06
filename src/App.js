import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import LinkForm from './Components/LinkForm/LinkForm';
import Particles from 'react-particles-js';
import './App.css';
//import Intro from './Pages/Intro';
//import Home from './Pages/Home';
//import Afeksi from './Pages/Afeksi';
//import { BrowserRouter as Router,Route } from 'react-router-dom';
// Disini taruh switch sama route, untuk alur page.
const particlesOptions = {
  particles : {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <Particles
                params={particlesOptions} />
        <LinkForm/>
      </div>
    );
  }
}

export default App;
