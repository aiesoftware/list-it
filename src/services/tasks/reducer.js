const initialState = {
  tasks: [
    {id: 1, text: 'Walk the dog', completed: false},
    {id: 2, text: 'Make breakfast', completed: false},
    {id: 3, text: 'Plan tasks for the day', completed: false},
  ]
};

const reducer = (state = initialState, action) => {
  return initialState;
}

export default reducer;