import React, {Component} from 'react';
import classes from './TaskClearer.module.css';

import buttonClasses from '../../../../components/Button/Button.module.css';

const TaskClearer = () => {

  const classList = [
    buttonClasses.btn,
    buttonClasses.btnFull,
    buttonClasses.btnSecondary
  ];

  return (
    <button 
      className={classList.join(' ')}
      onClick={() => dispatch()}
    >
      Clear tasks
    </button>
  )
};

export default TaskClearer;