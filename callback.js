// optional callback

function saySomething(something, callback) {
  console.log(something);
  if (typeof callback === 'function') {
    callback(something);
  }
  return;
}

function wasSomethingSaid(str) {
  if (!str) {
    console.log('nothing was said');
    return;
  }
  console.log(str + ' was said')
  return;
}

function howManyLettersWereSaid(str) {
  if (!str) {
    console.log('nothing was said');
    return;
  }
  console.log(str.length + ' letters were spoken');
  return; 
}

saySomething('hello');
saySomething('hello', wasSomethingSaid);
saySomething('hello', howManyLettersWereSaid);