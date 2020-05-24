import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './TaskClearer.module.css';
import buttonClasses from '../../../../components/Button/Button.module.css';
import {clearTasks} from '../../../../services/tasks/actions';

const TaskClearer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state);

  const classList = [
    buttonClasses.btn,
    buttonClasses.btnFull,
    buttonClasses.btnSecondary
  ];

  if (tasks.length == 0) return '';

  return ( 
    <button 
      className={classList.join(' ')}
      onClick={() => dispatch(clearTasks())}
    >
      Clear tasks
    </button>
  );
};

export default TaskClearer;