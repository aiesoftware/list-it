import React, {Fragment} from 'react';
import classes from './TextInput.module.css';

const TextInput = ({placeholder}) => {
  return (
    <Fragment>
      <input type="text" placeholder={placeholder} />
    </Fragment>
  )
};

export default TextInput;