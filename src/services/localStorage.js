// Guardar en LS
const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Obtener de LS
const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const objToExport = {
  get: get,
  set: set,
};

export default objToExport;
