const React = require('react');
const counterStore = require('../stores/counterStore')

class App extends React.Component {
  constructor (props) {
    super(props);
    debugger;
    this.state = counterStore.getState();
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
          <button className='decrement'>
            -
          </button>
          <button className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
