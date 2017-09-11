import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        calendar: {
          days:["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday","Sunday"],
          month: "September",
          year: 2017,
          firstMonthDay: 5
        }
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Calendar</h2>
        </div>

        <div className="row">
          <Header calendar={this.state.calendar} />
        </div>

        <div className="row">
          
        </div>

      </div>
    );
  }
}

export default App;

