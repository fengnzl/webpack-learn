function isObject(object) {
  return typeof object === 'object' && object !== null;
}

function isEmptyObject (object) {
  return isObject(object) && Object.keys(object).length < 1;
}

export {
  isObject,
  isEmptyObject
}