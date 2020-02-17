import React from 'react';
import './button.styles.css';

const Button = ({children, className}) => (
  <button className={`btn ${className ? className : null}`}>
    {children}
  </button>
);

export default Button;
