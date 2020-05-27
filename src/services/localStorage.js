const loadFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export {loadFromStorage, saveToStorage};