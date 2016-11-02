const React = require('react');
const counterStore = require('../stores/counterStore')
const actions = require('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleIncrement = actions.increment.bind(this);
    this.handleDecrement = actions.decrement.bind(this);
    
    this.state = {
      counter: counterStore.getState()
    }
  }
  componentDidMount () {
    // Your implementation here.
  }
  componentWillUnmount () {
    // Your implementation here.
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
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
