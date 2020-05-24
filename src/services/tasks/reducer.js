const initialState = [
    {id: 1, text: 'Walk the dog', completed: true},
    {id: 2, text: 'Make breakfast', completed: false},
    {id: 3, text: 'Plan tasks for the day', completed: false},
  ];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TASK':
      return state.map((s) => {
        if (s.id !== action.id) {
          return s;
        }

        return {...s, completed: !s.completed};
      });

    default:
      return state;  
  }
  return state;
}

export default reducer;