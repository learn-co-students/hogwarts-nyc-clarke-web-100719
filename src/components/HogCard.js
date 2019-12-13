import React, { Component } from 'react';

class HogCard extends Component {


    slugify = () => {
        return this.props.hog.name.replace(/\s/g, "_").toLowerCase()
    }

    handleClick = () => {
        if (this.props.activeHog === this.props.hog.name) {
            this.props.setActiveHog(null)
        } else {
            this.props.setActiveHog(this.props.hog.name)
        }
    }

    renderHogDetails = () => {
        if (this.props.hog.name === this.props.activeHog) {
            return (
                <div className="small feed">
                        <div className="summary">
                            Specialty: {this.props.hog.specialty}
                        </div>
                        <div className="summary">
                            {this.props.hog.greased ? "" : "Not "}Greased
                        </div>
                        <div className="summary">
                            Weight: {this.props.hog.weight}
                        </div>
                        <div className="summary">
                            Highest Medal Achieved: {this.props.hog['highest medal achieved']}
                        </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="ui stackable card" onClick={this.handleClick}>
                    <div className="image">
                        <img src={`./hog-imgs/${this.slugify()}.jpg`} alt={this.props.hog.name}/>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.hog.name}</div>
                        {this.renderHogDetails()}
                    </div>
                    <button className="ui bottom attached button" onClick={() => this.props.penHog(this.props.hog)}>{ this.props.status === "unpenned" ? "Pen Hog" : "Release Hog"}</button>
            </div>
        )
    }
}


export default HogCard