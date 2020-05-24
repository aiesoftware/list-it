import React, {Component} from 'react';

import TaskList from '../../../../components/TaskList'

const ToggleableTaskList = ({store}) => {
  const state = store.getState();
  return (
    <TaskList 
      tasks={state.tasks}
    />
  )
};

export default ToggleableTaskList;