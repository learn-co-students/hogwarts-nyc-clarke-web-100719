import React from 'react';

export default class ButtonBar extends React.Component {
    handleClick = (event) => {
        this.props.changeToggle(event.target.name)
    }

    render() {
        return(
            <div className="navWrapper">
                <button onClick={this.handleClick} name="onlyGreased">{this.props.onlyGreased ? 'Only the Greasy Porkies!' : 'Greased Only?'}</button>
                <button onClick={this.handleClick} name="sortName">{this.props.sortName ? 'Sorted by Name' : 'Sorted by Name?'}</button>
                <button onClick={this.handleClick} name="sortWeight">{this.props.sortWeight ? 'Sorted by Weight' : 'Sorted by Weight?'}</button>
            </div>
        )
    }
}