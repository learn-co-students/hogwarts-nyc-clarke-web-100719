import React, {Component} from 'react'

class ButtonBar extends Component {

    handleChange = (event) => {
        if (event.target.name === "sortBy") {
            this.props.changeState(event.target.name, event.target.value)
        } else if (event.target.name === "filter") {
            this.props.changeState(event.target.name, event.target.value)
        }
    }

    render() {
        return (
            <div className="filterWrapper">
                <select onChange={this.handleChange} name="filter" value={this.props.filter} className="ui selection dropdown">
                    <option value="">All Pigs</option>
                    <option value="greased">Greased</option>
                    <option value="notGreased">Not Greased</option>
                </select>
                <select onChange={this.handleChange} name="sortBy" value={this.props.sortBy} className="ui selection dropdown">
                    <option value="">None</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
        )
    }
}

export default ButtonBar
