import React from 'react'

const images = require.context('../hog-imgs')
export default class Tile extends React.Component{
    state = {
        showingDetails: false
    }

    handleClick = () =>{
        this.setState({
            showingDetails: !this.state.showingDetails
        })
    }

    render(){
        const img_path = this.props.hogInfo.name.toLowerCase().split(' ').join('_')
        return(<div className="ui eight wide column">
            <h3>{this.props.hogInfo.name}</h3>
            <img onClick={this.handleClick} src={images(`./${img_path}.jpg`)}></img>
            {this.state.showingDetails?
            <ul>
            <li>Weight: {this.props.hogInfo.weight}</li>
            <li>Specialty: {this.props.hogInfo.specialty}</li>
            <li>Highest Medal Achieved: {this.props.hogInfo['highest medal achieved']}</li>
            </ul>
            :
            null
            }
        </div>)
    }
}