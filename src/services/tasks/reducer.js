const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, createTask(action)]
    case 'TOGGLE_TASK':
      return state.map((task) => toggleTask(task, action.id));
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

export default reducer;