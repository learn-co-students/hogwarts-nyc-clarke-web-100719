import React, {Component} from 'react'

export default class HogTile extends Component {
    
    state = {
        showDetails: false
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    getImage = hogName => {
        let imgPath = hogName.toLowerCase().split(' ').join('_')
        let image = require(`../hog-imgs/${imgPath}.jpg`)
        return image
    }

    render() {
        return (
            <div className="ui eight wide column" onClick={this.handleClick}>
                <h3>{this.props.hogInfo.name}</h3>
                <img src={this.getImage(this.props.hogInfo.name)} alt="hogPic"></img>
                {this.state.showDetails?
                <ul>
                    <li><strong>Specialty:</strong> {this.props.hogInfo.specialty}</li>
                    <li><strong>Greased:</strong> {this.props.hogInfo.greased? "true" : "false"} </li>
                    <li><strong>Weight:</strong> {this.props.hogInfo.weight}</li>
                    <li><strong>Highest Medal Achieved:</strong> {this.props.hogInfo['highest medal achieved']}</li>
                </ul>
                :
                null
                }
            </div>
        )
    }
}