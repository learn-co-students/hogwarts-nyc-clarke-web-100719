import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import MainBody from './MainBody.js'
import { hostname } from 'os';

class App extends Component {
  state = {
    hogs: hogs
  }

  filterHogs = (e) => {
    //if greased button clicked, set state to give only greased hogs
    //if time ungrease pigs
    let filteredHogs;
    filteredHogs = this.state.hogs.filter(hog => hog.greased)

    this.setState({
      hogs: filteredHogs
    })
  }

  sortHogs = (e) => {
    let sortedHogs;
    if (e.target.value === "name") {
      sortedHogs = this.state.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else if (e.target.value === "weight") {
      sortedHogs = this.state.hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1).reverse()
    }

    this.setState({
      hogs: sortedHogs
    })
  }

  newHogInfo = (event, formValues) => {
    event.preventDefault()

    let newHog;
    newHog = [...this.state.hogs, formValues]

    this.setState({
      hogs: newHog
    })
  }

  
  render() {
    return (
      <div className="App">
          <Nav filterHogs={this.filterHogs} sortHogs={this.sortHogs} />
          <MainBody hogsData={this.state.hogs} newHogInfo={this.newHogInfo}/>
      </div>
    )
  }
}

export default App;
