import React, { Component } from 'react';



class HogCard extends Component {

    handleClick = () => {
        this.props.setActiveHog(this.props.hog.name)
    }

    renderHogDetails = () => {
        if (this.props.hog.name === this.props.activeHog) {
            return (
                    <h3><ul>
                        <li>
                            Specialty: {this.props.hog.specialty}
                        </li>
                        <li>
                            Greased: {this.props.hog.greased.toString()}
                        </li>
                        <li>
                            Weight: {this.props.hog.weight}
                        </li>
                        <li>
                            Highest Medal Achieved: {this.props.hog['highest medal achieved']}
                        </li>
                    </ul></h3>               
            )
        }
    }

    render() {
        return (
            <div className="ui eight wide column" onClick={this.handleClick}>
                <div className={ this.props.activeHog === this.props.hog.name ? 'maxPigTile pigTile' : 'pigTile'}>
                    <h3>{this.props.hog.name}</h3>
                    <img src={this.props.img} alt={this.props.hog.name}/>
                    {this.renderHogDetails()}
                </div>
            </div>
        )
    }
}


export default HogCard