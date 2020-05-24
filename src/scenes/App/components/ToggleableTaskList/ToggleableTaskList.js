import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import TaskList from '../../../../components/TaskList'
import {toggleTask} from '../../../../services/tasks/actions'

const ToggleableTaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state);

  return (
    <TaskList 
      tasks={tasks}
      onTaskClick={(id) => dispatch(toggleTask(id))}
    />
  )
};

export default ToggleableTaskList;