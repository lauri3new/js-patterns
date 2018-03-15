// const path = (array) => (object) => {
//   return object[array[0]] && object[array[0]][array[1]]
// }
const or = require('./logic');

const path = (array) => (object) => {
  return array.reduce((acc, arrItem, i) => {
    if (!acc) { 
      return undefined 
    }
    if (acc[arrItem]) {
      return acc[arrItem];
    }
    else {
      acc = undefined;
      return;
    }
  }, object)
}

const pathOr = (array, orProp) => (object) => {
  return or(array.reduce((acc, arrItem, i) => {
    if (!acc) { 
      return undefined 
    }
    if (acc[arrItem]) {
      return acc[arrItem];
    }
    else {
      acc = undefined;
      return;
    }
  }, object), orProp);
}


// examples

const jc = {
  name: 'jc',
  agent: {
    type: 'special',
    weapon: {
      sword: {
        type: 'dragon tooth'
      }
    }
  }
};

console.log(path(['agent', 'weapon', 'sword', 'type'])(jc)); // dragon tooth
console.log(path(['name', 'nickName', 'aka'])(jc)); // undefined
console.log(pathOr(['name', 'nickName', 'aka'], 'no akas')(jc)); // undefined