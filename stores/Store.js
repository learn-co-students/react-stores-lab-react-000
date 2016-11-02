class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }
  
  addListener(newListener){
    this.listeners.push(newListener)
    const removeListener = () =>{
      this.listeners = this.listeners.filter((l) => newListener !== l)
    }
    return removeListener;
  }
  
  setState(state){
    this.state = state;
    this.listeners.forEach(listener => listener(this.state));
  }
  
  getState(){
    return this.state;
  }
}

module.exports = Store;
