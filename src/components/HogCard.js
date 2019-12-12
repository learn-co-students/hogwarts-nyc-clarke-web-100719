import React from 'react'
import { blockParams } from 'handlebars'
// import hogImgs from '../hog-imgs'
class HogCard extends React.Component {
    state = {
        showDetails: false,
        display: "block"
    }

    clickHandle = () => {
        this.setState({
            showDetails: !this.state.showDetails,
        })
    }

    showDetails = () => {
        return (
            <div>
                    <p>Speciality: {this.props.hogObj.specialty}</p>
                    <p>Greased: {this.props.hogObj.greased ? "Very Oily Hoggie" : "Dry Hoggie"}</p>
                    <p>Weight: {this.props.hogObj.weight}</p>
                    <p>Highest Medal: {this.props.hogObj["highest medal achieved"]}</p>
                
            </div>
        )
    }

    hideHog = () => {
        this.setState({
            display: "none"
        })
    }

    render(){
        // console.log(this.props.hogObj)
        let hogImg = this.props.hogObj.name.replace(/ /g, "_").toLowerCase()
        let imgPath = require(`../hog-imgs/${hogImg}.jpg`);
        
       return (

           <div className="ui eight wide column" style={{display: this.state.display}}><br/>
               <p>{this.props.hogObj.name}</p><br/>
               <img src={imgPath} /><br/>
            <button onClick={this.clickHandle}>{this.state.showDetails ? "Hide" : "Show"} Details</button>
                {this.state.showDetails ? this.showDetails() : null}
            <button onClick={this.hideHog}>Hide Hoggie!</button>
           </div>
          
       )
    }
}


export default HogCard 