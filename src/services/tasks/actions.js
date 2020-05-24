const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    id: id
  };
}

export {toggleTask};