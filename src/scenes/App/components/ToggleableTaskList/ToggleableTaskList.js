import React, {Component} from 'react';
import {useSelector} from 'react-redux';

import TaskList from '../../../../components/TaskList'

const ToggleableTaskList = () => {
  const tasks = useSelector(state => state.tasks);
  return (
    <TaskList 
      tasks={tasks}
    />
  )
};

export default ToggleableTaskList;