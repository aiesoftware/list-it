import {v4 as uuidv4} from 'uuid';

const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    id: uuidv4(),
    text
  };
}

const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    id
  };
}

const clearTasks = () => {
  return {
    type: 'CLEAR_TASKS'
  }
}

export {addTask, toggleTask, clearTasks};