import React, { Component } from 'react';
import Countdown from './Clock/Clock.js';
import ReactCountdownClock from 'react-countdown-clock';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import Background from './resources/image.jpg'
import MediaQuery from 'react-responsive';

function calcDiff() {
  return (Date.parse(new Date(2017, 11, 23, 9, 0, 0, 0)) - Date.parse(new Date())) / 1000;
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      bcountDown: "",
      countCompleted: false,
      countdown1: calcDiff(),
      unlocked: false,
    }
  }

  componentDidMount() {
    let d = new Date();
    d.setFullYear(2018, 0, 4);
    
    //let a = new Date(2017, 11, 23, 9, 0, 0, 0);
    //let b = new Date();
    //console.log('a', a, b, (a - b) /1000)
    //let c = (a - b) /1000
    //console.log(diff);
    this.setState({bcountDown: d});
  }

  timerComplete() {
    this.setState({countCompleted: true});
  }

  handlePasswordChange(newVal) {
    if(newVal === "passwordtesttest") {
      this.setState({unlocked: true})
    }
  }

  render() {
    const { countCompleted, unlocked, countdown1 } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">WELCOME TO THE BEGINNING OF THE END</h1>
          </header>
          {!unlocked ? <div>
            {!countCompleted ? <div style={{marginRight: 350}}><ReactCountdownClock
              seconds={countdown1}
              color="#000"
              alpha={0.9}
              size={350}
              onComplete={() => this.timerComplete()}
            /></div>
              :
              <Countdown
                date={this.state.bcountDown}
              />}
            {countCompleted ? <TextField
              type="password"
              style={{display: 'block', margin: 'auto'}}
              floatingLabelText="Enter Password"
              defaultValue=""
              onChange={(e, newVal) => this.handlePasswordChange(newVal)}
            /> : null}
          </div>
            : 
              <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>}
          <div>
            <MediaQuery minDeviceWidth={1224}>
              <img style={{overflow: 'hidden'}} src={Background}/>
            </MediaQuery>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
