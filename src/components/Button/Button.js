import React, {Fragment} from 'react';
import classes from './Button.module.css';

const Button = ({size, type, children}) => {
  const classList = [
    classes.btn,
    classes[`btn-${size}`],
    classes[`btn-${type}`],
  ];

  return (
    <Fragment>
      <button 
        className={classList.join(' ')}
      >
        {children}
      </button>
    </Fragment>
  )
};

export default Button;