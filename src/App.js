import React from 'react';
import Intro from './Pages/Intro';
import Afeksi from './Pages/Afeksi';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// Disini taruh switch sama route, untuk alur page.
function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path='/' component={Intro} />
      <Route path='/Afeksi' component={Afeksi} />
    </Router>
  </div>
  );
}

export default App;
