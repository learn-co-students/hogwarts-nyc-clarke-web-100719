import React, {Component} from 'react'

class ButtonBar extends Component {

    handleClick = (event) => {
        this.props.changeToggle(event.target.name)
    }

    render() {
        return (
            <div className="navWrapper">
                <button onClick={this.handleClick} name="onlyGreased"> {this.props.onlyGreased ? "All" : "Only Greased"} </button>
                <button onClick={this.handleClick} name="sortName"> {this.props.sortName ? "Unsort by Name" : "Sort by Name"} </button>
                <button onClick={this.handleClick} name="sortWeight"> {this.props.sortWeight ? "Unsort by Weight" : "Sort by Weight"} </button>

            </div>
        )
    }
}

export default ButtonBar
