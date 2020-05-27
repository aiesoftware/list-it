import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import TaskList from '../../../../components/TaskList'
import {toggleTask, deleteTask} from '../../../../services/tasks/actions'

const ToggleableTaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state);

  return (
    <TaskList 
      tasks={tasks}
      onTaskToggle={(id) => dispatch(toggleTask(id))}
      onTaskDelete={(id) => dispatch(deleteTask(id))}
    />
  )
};

export default ToggleableTaskList;