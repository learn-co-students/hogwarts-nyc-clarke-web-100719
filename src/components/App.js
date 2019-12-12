import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import MainBody from './MainBody'
import ButtonBar from './ButtonBar'


class App extends Component {
  state = {
    onlyGreased: false,
    sortName: false,
    sortWeight: false
  }

  changeToggle = (toggle) => {
    this.setState(previousState => {
      return {
        [toggle]: !previousState[toggle]
      }
    })
  }

  changeSortName = () => {

  }

  changeSortWeight = () => {

  }
  render() {
    console
    return (
      <div className="App">
          < Nav />
          < ButtonBar  onlyGreased={this.state.onlyGreased} sortName={this.state.sortName} sortWeight={this.state.sortWeight} changeToggle={this.changeToggle}/>
          < MainBody  onlyGreased={this.state.onlyGreased} sortName={this.state.sortName} sortWeight={this.state.sortWeight}/>
      </div>
    )
  }
}

export default App;
