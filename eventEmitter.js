// event emitters contain register of callbacks organised by eventName,
// when event occurs those callbacks are triggered synchronosuly
// can also pass data into callback
// eventNames must be compatible with . syntax (no spaces, special chars)

// ES5
function es5EventEmitter() {
  this.listeners = {};
}

es5EventEmitter.prototype.addListener = function(eventName, callback) {
  if (!this.listeners.eventName) {
    this.listeners[eventName] = [];
  }
  if (this.listeners.eventName.findIndex(callback) === -1) {
    this.listeners.eventName.push(callback);
  }
  return this;
}

es5EventEmitter.prototype.removeListener = function(eventName, callback) {
  this.listeners[eventName] = this.listeners[eventName].filter(cb => cb !== callback);
  return this;
}

es5EventEmitter.prototype.emit = function(eventName) {
  this.listeners[eventName].forEach(function(callback) {
    callback();
  });
}

// ES6
class EventEmitter {

  constructor() {
    this.listeners = {};
  }
    
  addListener(eventName, callback) {
    if (!this.listeners.eventName) {
      this.listeners = {
        ...this.listeners,
        [eventName]: [],
      }
    }
    if (this.listeners[eventName].findIndex(callback) === -1) {
      this.listeners[eventName].push(callback);
    }
    return this;
  }
    
  on(eventName, callback) {
    // on and addListener do same thing
    this.addListener(eventName, callback)
  }
    
  removeListener(eventName, callback) {
    this.listeners[eventName] = this.listeners[eventName].filter(cb => cb !== callback);
    return this;
  }
    
  emit(eventName) {
    this.listeners[eventName].forEach(callback => {
      callback();
    });
  } 

}