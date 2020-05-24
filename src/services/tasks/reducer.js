const reducer = (state = [
  {id: 1, text: 'Take the bins out', completed: false},
  {id: 2, text: 'Go to the garage', completed: false},
  {id: 3, text: 'A very long task that will take all day then do that thing', completed: false},
], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, createTask(action)]
    case 'TOGGLE_TASK':
      return state.map((task) => toggleTask(task, action.id));
    case 'DELETE_TASK':
      return state.filter((task) => !taskHasId(task, action.id));
    case 'CLEAR_TASKS':
      return [];
    default:
      return state;  
  }
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