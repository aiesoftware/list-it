const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {id: action.id, text: action.text, completed: false}]
    case 'TOGGLE_TASK':
      return state.map((task) => toggleTask(task, action.id));
    default:
      return state;  
  }
}

const toggleTask = (task, id) => {
  if (id !== task.id) {
    return task;
  }

  return {...task, completed: !task.completed};
}

export default reducer;