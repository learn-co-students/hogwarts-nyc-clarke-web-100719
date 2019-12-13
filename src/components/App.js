import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import MainBody from './MainBody'
import ButtonBar from './ButtonBar'
import hogs from '../porkers_data';


class App extends Component {
  state = {
    filter: "",
    sortBy: "",
    hiddenHogs: [],
    sourceHogs: hogs,
    listedHogs: [...hogs]
  }

  penHog = (targetHog) => {
    this.setState({
      hiddenHogs: [...this.state.hiddenHogs, targetHog],
      listedHogs: this.state.listedHogs.filter(hog => hog !== targetHog)
    })
  }

  changeState = (state, value) => {
    this.setState({
        [state]: value
      })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < ButtonBar changeState={this.changeState} filter={this.state.filter} sortBy={this.state.sortBy} />
          <h1 className="ui header">Remaining Hogs</h1>
          < MainBody  penHog={this.penHog} status="unpenned" hogs={this.state.listedHogs} filter={this.state.filter} sortBy={this.state.sortBy}/>
          <h1 className="ui header">Penned Hogs</h1>
          < MainBody penHog={this.penHog} status="penned" hogs={this.state.hiddenHogs} />
      </div>
    )
  }
}

export default App;
