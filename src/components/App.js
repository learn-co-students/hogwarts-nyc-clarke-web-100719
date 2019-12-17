import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container'

class App extends Component {

  state = {
    hogs: hogs,
    greasedFilter: false,
    sort: ""
  }

  updateFilter = () => {
    this.setState({
      greasedFilter: !this.state.greasedFilter
    })
  }

  sortHogs = (sortCriteria) => {
    this.setState({
      sort: sortCriteria
    })
  }

  render() {
    let hogPool = this.state.hogs
    if(this.state.greasedFilter){
      hogPool = hogPool.filter(hog => hog.greased === true)
    }
    if(this.state.sort === 'name'){
      hogPool = hogPool.slice(0)
      hogPool.sort(function(a,b){
        let x = a.name.toLowerCase()
        let y = b.name.toLowerCase()
        return x < y ? -1 : x > y ? 1 : 0
      })
    } else if (this.state.sort === 'weight'){
      hogPool = hogPool.slice(0)
      hogPool.sort(function(a,b){
        return a.weight - b.weight
      })
    }
    return (
      <div className="App">
          < Nav sortHogs={this.sortHogs} updateFilter={this.updateFilter} greasedProp={this.state.greasedFilter}/>
          < Container hogs={hogPool} />
      </div>
    )
  }
}

export default App;
