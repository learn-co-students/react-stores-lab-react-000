const counterStore = require('../stores/counterStore');

// Your implementation here.
// Hint: We need two actions!
function increment(ev){
  // ev.preventDefault();
  counterStore.increment()
}

function decrement(ev){
  // ev.preventDefault();
  counterStore.decrement();
}
module.exports = {
  increment,
  decrement
};
