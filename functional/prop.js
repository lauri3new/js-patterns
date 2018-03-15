const or = require('./logic');

const prop = (string) => (object) => {
  return object[string];
}

const propOr = (string, orProp) => (object) => {
    return or(object[string], orProp);
}

// examples

const shraddha = {
  name: 'shraddha',
  age: 30
}

const getName = prop('name');
console.log(getName(shraddha));

const getDOB = propOr('DOB', 'N/A');
console.log(getDOB(shraddha));

