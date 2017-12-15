import React, { Component } from 'react';
import Countdown from './Clock/Clock.js';
import ReactCountdownClock from 'react-countdown-clock';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bcountDown: "",
      countCompleted: false,
      unlocked: false,
    }
  }

  componentDidMount() {
    let d = new Date();
    d.setFullYear(2018, 0, 4);
    this.setState({bcountDown: d});
  }

  timerComplete() {
    this.setState({countCompleted: true});
  }

  handlePasswordChange(newVal) {
    if(newVal === "passwordtest") {
      this.setState({unlocked: true})
    }
  }

  render() {
    const { countCompleted, unlocked } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the beginning of end of Bachelorhood</h1>
          </header>
          {!unlocked ? <div>
            {!countCompleted ? <div style={{marginRight: 400}}><ReactCountdownClock
              seconds={10}
              color="#000"
              alpha={0.9}
              size={400}
              onComplete={() => this.timerComplete()}
            /></div>
              :
              <Countdown
                date={this.state.bcountDown}
              />}
            {countCompleted ? <TextField
              style={{display: 'block', margin: 'auto'}}
              floatingLabelText="Enter Password"
              defaultValue=""
              onChange={(e, newVal) => this.handlePasswordChange(newVal)}
            /> : null}
          </div>
            : <h1 className="App-title">You Win!!!</h1>}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
