import {loadFromStorage, saveToStorage} from '../localStorage';

const reducer = (state = loadFromStorage('tasks') || [], action) => {
  let updatedState
  switch (action.type) {
    case 'ADD_TASK':
      updatedState = [...state, createTask(action)];
      break;
    case 'TOGGLE_TASK':
      updatedState = state.map((task) => toggleTask(task, action.id));
      break;
    case 'DELETE_TASK':
      updatedState = state.filter((task) => !taskHasId(task, action.id));
      break;
    case 'CLEAR_TASKS':
      updatedState = [];
      break;
    default:
      updatedState = state;  
  }

  saveToStorage('tasks', updatedState);
  return updatedState;
}

const createTask = (task) => {
  return {
    id: task.id,
    text: task.text,
    completed: false
  };
}

const toggleTask = (task, id) => {
  if (id !== task.id) {
    return task;
  }

  return {...task, completed: !task.completed};
}

const taskHasId = (task, id) => {
  return task.id === id;
}

export default reducer;