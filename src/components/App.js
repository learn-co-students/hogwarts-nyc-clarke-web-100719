import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'


class App extends Component {
  
  state = {
    showGreased: false,
    sortedName: false,
    sortedWeight: false,
    hiddenHogs: false
  }

  hideHogs = () => {
    this.setState({
      hiddenHogs: !this.state.hiddenHogs
    })
  }

  nameSort = () => {
    if(this.state.sortedWeight) {
      this.setState( {
        sortedName: !this.state.sortedName,
        sortedWeight: false,
      })
    } 
    else
     {
      this.setState({
        sortedName: !this.state.sortedName
      })
    }
  }


  weightSort = () => {
    if (this.state.sortedName) {
      this.setState({
        sortedWeight: !this.state.sortedWeight,
        sortedName: false
      })
    }
    else {
      this.setState({
        sortedWeight: !this.state.sortedWeight
      })
    }
  }

  greaseClick = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  renderHog = () => {
    let hogArr = JSON.parse(JSON.stringify(hogs))

    if (this.state.sortedName) {
        hogArr = hogArr.sort((a,b)=> {
          if(a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
    } else if (this.state.sortedWeight) {
      hogArr = hogArr.sort((a, b) => {
        if (a.weight < b.weight) {
          return -1;
        }
        if (a.weight > b.weight) {
          return 1;
        }
        return 0;
      }) 
    } else {
      hogArr = hogs
    }

    // let i = 0;
    return hogArr.map((hog) => {
      // let hiddenHogs = [];
        if (this.state.showGreased) {
          return (hog.greased ? <HogCard hogObj={hog} /> : null )
        } 
        else 
        {
        
        return (
        <div>
          <HogCard
            hogObj={hog}
          />
        </div>
        )
      }
    })
  }
  render() {
    return (
      <div className="App">
          < Nav/><br/>
          <button onClick={this.greaseClick}>{this.state.showGreased ? "Not Greased" : "Greased"} Hoggies! </button>
          <button onClick={this.nameSort}>{this.state.sortedName ? "Sorted" : "Not Sorted"} By Hoggie Name! </button>
          <button onClick={this.weightSort}>{this.state.sortedWeight ? "Don't" : ""} Sort By Fatsos! </button><br/><br/>
        <div className="ui grid container">{this.renderHog()} </div>
      </div>
    )
  }
}

export default App;
