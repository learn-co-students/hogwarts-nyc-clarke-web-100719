import React, { Component } from 'react';
import HogCard from './HogCard'


class MainBody extends Component {

    state = {
        activeHog: null
    }

    setActiveHog = (name) => {
        this.setState({            
            activeHog: name
        })
    }


    renderHogs = () => {
        let hogsToDisplay = [...this.props.hogs]
        if (this.props.filter === "greased") {
            hogsToDisplay = hogsToDisplay.filter(hog => hog.greased)
        } else if (this.props.filter === "notGreased") {
            hogsToDisplay = hogsToDisplay.filter(hog => !hog.greased)            
        }
        
        if (this.props.sortBy === 'name') {
            hogsToDisplay = hogsToDisplay.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
        } else if (this.props.sortBy === 'weight') {
            hogsToDisplay = hogsToDisplay.sort((hogA, hogB) => hogA.weight - hogB.weight)
        } 

        return hogsToDisplay.map(hog => {
            return <HogCard hog={hog} status={this.props.status} penHog={this.props.penHog} setActiveHog={this.setActiveHog} activeHog={this.state.activeHog} key={hog.name}/> 
        })
    }



    render() {
        return (
            <div className="ui grid container">
                <div className="ui cards" >
                    {this.renderHogs()}
                </div>
            </div>
        )
    }
}


export default MainBody