import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import classes from './Task.module.css';

const Task = ({id, text, completed, onToggle, onDelete}) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <input 
          className={classes.input} 
          type="checkbox" 
          id={`item-${id}`} 
        />
        <svg 
          className={classes.svg}
          viewBox="0 0 60 40"
          style={{borderColor: completed ? '#fa8264' : '#eee'}}
        >
          <path 
            className={classes.path}
            d='
              M21,2 
              C13.4580219,4.16027394 1.62349378,18.3117469 3,19 
              C9.03653312,22.0182666 25.2482171,10.3758914 30,8 
              C32.9363621,6.53181896 41.321398,1.67860195 39,4 
              C36.1186011,6.8813989 3.11316157,27.1131616 5,29 
              C10.3223659,34.3223659 30.6434647,19.7426141 35,18 
              C41.2281047,15.5087581 46.3445303,13.6554697 46,14 
              C42.8258073,17.1741927 36.9154967,19.650702 33,22 
              C30.3136243,23.6118254 17,31.162498 17,34 
              C17,40.4724865 54,12.4064021 54,17 
              C54,23.7416728 34,27.2286213 34,37
              ' 
            strokeWidth='4'
            fill='none'
            strokeDasharray='270'
            style={{strokeDashoffset: completed? '0' : '270'}}
          >
          </path>
        </svg>
        <label 
          className={classes.label}
          htmlFor={`item-${id}`}
          onClick={onToggle}
          style={{textDecoration: completed ? 'line-through' : 'none'}} 
        >
          {text}
        </label>
        <span onClick={onDelete}><FontAwesomeIcon icon={faTrash} color="#fa8264" /></span>
      </div>
    </Fragment>
  )
};

export default Task;