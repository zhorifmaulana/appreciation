import React from 'react';
import logo from './logoawal.png';
import '../App.css';
//import {Button} from 'react-bootstrap';
//import {Link} from 'react-router-dom';




function Intro() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='f3'>
          Sebuah portal dukungan untuk mereka yang sedang berjuang :v
        </p>
        <input className='f4 pa2 w70 center' type='tex' placeholder='akun IG'/>
          <button className= 'f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>
           KUY DI CEK!
           </button>
      </header>

    </div>
  );
}

export default Intro;
