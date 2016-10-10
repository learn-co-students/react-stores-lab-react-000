import React from 'react';
import actions from '../actions';
import counterStore from '../stores/counterStore'

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: counterStore.getState()
        };

        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
    }

    componentDidMount () {
        this.removeListener = counterStore.addListener(counter => {
            this.setState({ counter });
        });
    }

    componentWillUnmount () {
        this.removeListener()
    }

    handleIncrementClick(event) {
        event.preventDefault();
        actions.increment();
    }

    handleDecrementClick(event) {
        event.preventDefault();
        actions.decrement();
    }

    render () {
        const { counter } = this.state

        return (
            <div className='app'>
                <h1 className='counter'>{counter}</h1>
                <div className='actions'>
                    <button
                        className='decrement'
                        onClick={this.handleDecrementClick}
                    >
                        -
                    </button>
                    <button
                        className='increment'
                        onClick={this.handleIncrementClick}
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

module.exports = App;
