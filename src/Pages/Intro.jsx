import React from 'react';
import logo from './firework.svg';
import '../App.css';
import Button from './button';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faBars } from '@fortawesome/free-solid-svg-icons'



library.add(faBars);


function Intro() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sebuah usaha agar tulisan yang tidak terbaca menjadi terbaca :v
        </p>
        <Link to = '/Afeksi'>
        <Button>OPEN</Button>
        </Link>
      </header>
    </div>
  );
}

export default Intro;
