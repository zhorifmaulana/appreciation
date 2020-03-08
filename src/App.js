import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import LinkForm from './Components/LinkForm/LinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Template from './Components/Template/Template';
//import { BrowserRouter as Router,Route } from 'react-router-dom';
// Disini taruh switch sama route, untuk alur page.​
// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
 apiKey: '559cffa68f9e46569509caa9d45f1b11'
});

const particlesOptions = {
  particles : {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height (clarifaiFace.bottom_row * height),
    }
  }

displayFaceBox = (box) => {
  this.setState({box});
}

onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

onButtonSubmit = () => {
  this.setState({imageUrl:this.state.input})
  app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}

onRouteChange = (route) => {
  if(route === 'signout'){
    this.setState({isSignedIn: false})
  }
  else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  render() {
    const {isSignedIn,imageUrl,route,box} = this.state;
    return (
      <div className='App'>
        <Particles className='particles'params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home'
        ? <div>
           <Template/>
            <LinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
          <FaceRecognition box ={box} imageUrl={imageUrl}/>
        </div>
        : (
          route === 'signin'
          ? <SignIn onRouteChange = {this.onRouteChange}/>
          : <Register onRouteChange = {this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
