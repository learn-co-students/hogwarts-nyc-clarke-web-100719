import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogwart from "./Hogwart";


class App extends Component {

    state = {
        isGreased: false,
        sortAlphabetically: false,
        sortWeight: false
    };

    toggleFilter = () => {
        this.setState({
            isGreased: !this.state.isGreased
        })
    };

    sortAlphabetically = () => {
        this.setState({
            sortAlphabetically: !this.state.sortAlphabetically
        })
    };

    sortWeight = () => {
        this.setState({
            sortWeight: !this.state.sortWeight
        })
    };

    // changeState = (state) => {
    //     switch (state) {
    //         case "isGreased":
    //             this.setState({
    //                 isGreased: true,
    //                 sortAlphabetically: false,
    //                 sortWeight: false
    //             });
    //             break;
    //         case "isGreased":
    //             this.setState({
    //                 isGreased: true,
    //                 sortAlphabetically: false,
    //                 sortWeight: false
    //             });
    //             break;
    //     }
    // }

    renderHogwart = () => {

        let displayHogs = [];
        // let sortedHogs = [];

        displayHogs = hogs;

        if (this.state.isGreased) {
            displayHogs = hogs.filter(hog => hog.greased);
        }

        if (this.state.sortAlphabetically) {
            displayHogs = hogs
                .sort((a, b) => a.name.localeCompare(b.name));
        }

        if (this.state.sortWeight) {
            displayHogs = hogs
                .sort((a, b) => b.weight - a.weight);
        }


        // this.state.isGreased
        //     ? displayHogs = hogs.filter(hog => hog.greased === true)
        //     : displayHogs = hogs;

        // this.state.sortAlphabetically
        //     ? displayHogs = hogs.filter(hog => hog.greased === true)
        //     : displayHogs = hogs;

        // let sortedHogs = displayHogs
        //     .sort((a, b) => a.name.localeCompare(b.name));

        // .sort((a, b) => a.itemM > b.itemM)
        // users.sort((a, b) => a.firstname.localeCompare(b.firstname))
        // const displayHogs = hogs.filter(hog => hog.greased === true)

         return displayHogs.map((hog, index) => {
            return <Hogwart
                key={index}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
            />;
        })
    };


  render() {
    return (
      <div className="App">
          <Nav toggleFilter={this.toggleFilter}
            sortAlphabetically={this.sortAlphabetically}
            sortWeight={this.sortWeight}
          />

          {this.renderHogwart()}
      </div>
    )
  }
}

export default App;
