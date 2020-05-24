import React, {Fragment, useState} from 'react';
import {useDispatch} from 'react-redux';

import classes from './TaskAdder.module.css';
import buttonClasses from '../../../../components/Button/Button.module.css';
import {addTask} from '../../../../services/tasks/actions';

const TaskAdder = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const classList = [
    buttonClasses.btn,
    buttonClasses.btnFull,
    buttonClasses.btnPrimary
  ];

  return (
    <Fragment>
      <div className={classes.container}>
        <input 
          type="text" 
          placeholder="new task" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button 
          className={classList.join(' ')}
          onClick={() => {
            dispatch(addTask(input))
            setInput('')
          }}
        >
          Add task
        </button>
      </div>
    </Fragment>
  );
};

export default TaskAdder;