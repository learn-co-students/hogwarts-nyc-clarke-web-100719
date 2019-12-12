import React from 'react';


export default class HogCard extends React.Component {
    handleClick = () => {
        this.props.setActiveHog(this.props.hog.name)
    }

    renderHogDetails = () => {
        if (this.props.activeHog === this.props.hog.name) {
            return(
                <div>
                    <ul>
                        <h3>
                            <li>Specialty: {this.props.hog.specialty}</li>
                            <li>Greased: {this.props.hog.greased.toString()}</li>
                            <li>Weight: {this.props.hog.weight}</li>
                            <li>Highest Medal: {this.props.hog['highest medal achieved']}</li>
                        </h3>
                    </ul>
                        
                </div>
                
            )
        }
    }
 
    render() {
        return(
            <div className='ui eight wide column' onClick={this.handleClick}>
                <div className={this.props.activeHog === this.props.hog.name && this.props.isActive ? "maxPigTile pigTile" : "pigTile"}>
                    <h3>{this.props.hog.name}</h3>
                    <img  src={this.props.img} alt={this.props.hog.name} />
                    {this.renderHogDetails()}
                </div>
            </div>
        )
    }
}