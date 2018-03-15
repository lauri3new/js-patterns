const merge = (object1) => (object2) => {
  return {
    ...object2,
    ...object1,
  };
};

// example

const updatedJohn = merge({ nickName: 'jo' })({ name: 'john'});

console.log(updatedJohn) // { nickaName: 'jo', name: 'john' }