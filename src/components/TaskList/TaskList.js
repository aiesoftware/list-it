import React, {Component} from 'react';

import classes from './TaskList.module.css';
import Task from './components/Task';

const TaskList = ({tasks, onTaskClick}) => {
  return (
    <div>
      <ul className={classes.itemList}>
        {tasks.map((task) => (
          <li key={task.id} className={classes.item}>
            <Task 
              id={task.id} 
              text={task.text} 
              completed={task.completed} 
              onClick={() => onTaskClick(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TaskList;