import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer'


class App extends Component {
  
  state ={
    hogs: hogs,
    greasedFilter: false,
    sortTerm: ""
  }

  changeGreased =() =>{
    this.setState({
      greasedFilter: !this.state.greasedFilter
    })
  }

  handleSort = (sortCondtion) =>{
    this.setState({
      sortTerm: sortCondtion
    })
  }
  
  render() {

    let filterHogs = [...this.state.hogs]
    if(this.state.greasedFilter){
    filterHogs = filterHogs.filter(hog => hog.greased === true )
    }
    if(this.state.sortTerm){
      if(this.state.sortTerm === "weight"){
      filterHogs = filterHogs.sort((a,b) => a.weight - b.weight)
      }
      else if(this.state.sortTerm === "name"){
        filterHogs.sort(function(a, b) {
          let nameA = a.name.toUpperCase()
          let nameB = b.name.toUpperCase() 
          if (nameA < nameB)return -1
          if (nameA > nameB)return 1
          return 0
        });
      }
    }

    return (
      <div className="App">
          < Nav changeGreased={this.changeGreased} handleSort={this.handleSort}greasedFilter={this.state.greasedFilter}/>
          <TileContainer hogs={filterHogs} />
      </div>
    )
  }
}

export default App;
