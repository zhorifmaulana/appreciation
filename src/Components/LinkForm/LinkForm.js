import React from 'react';
import './LinkForm.css';


const LinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className='f3 white' align = 'center'>
      {'Paste your image link here'}
      </p>
      <div className = 'center'>
        <div className = 'form center pa4 br3 shadow-5'>
          <input className = 'f4 pa2 w-70 center' type = 'tex'
          onChange={onInputChange} />
          <button className = 'w-30 f6 link dim br3 ph3 pv2 mb2 dib yellow bg-black'
          onClick={onButtonSubmit}>
           Temukan!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkForm;
