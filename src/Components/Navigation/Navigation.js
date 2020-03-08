import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

    if(isSignedIn){
      return (
        <nav style = {{display : 'flex', justifyContent : 'flex-end'}}>
          <p onClick = {() => onRouteChange('signin')}
          className= 'f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'> Sign Out </p>
        </nav>
            );
            }
    else {
      return (
        <nav style = {{display : 'flex', justifyContent : 'flex-end'}}>
          <p onClick = {() => onRouteChange('signin')} className= 'f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'> Sign In </p>
          <p onClick = {() => onRouteChange('register')} className= 'f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'> Register </p>
        </nav>
            );
          }

}

export default Navigation;
