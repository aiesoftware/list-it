import React, {Component} from 'react';
import classes from './TaskList.module.css';

import Task from './components/Task';

const TaskList = () => {
  return (
    <div>
      <ul className={classes.itemList}>
        <li className={classes.item}>
          <Task 
            id="1"
            text="Morning stretches"
          />
        </li>
        <li className={classes.item}>
          <Task 
            id="2"
            text="Emails"
          />
        </li>        
      </ul>
    </div>
  )
};

export default TaskList;