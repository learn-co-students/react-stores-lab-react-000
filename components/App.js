const React = require('react');
const counterStore = require('../stores/counterStore')
const actions = require('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    
    this.state = {
      counter: counterStore.getState()
    }
  }
  
  handleIncrement(ev){
    ev.preventDefault();
    actions.increment();
  }
  
  handleDecrement(ev){
    ev.preventDefault();
    actions.decrement();
  }
  
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener( state => {
      this.setState({counter: state});
    })
  }
  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
