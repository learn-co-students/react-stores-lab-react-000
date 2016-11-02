const Store = require('./Store')

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(){
    super(0)
  }
  
}

module.exports = new CounterStore();
