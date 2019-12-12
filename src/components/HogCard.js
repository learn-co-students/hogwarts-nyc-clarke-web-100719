import React from 'react'
// import hogImgs from '../hog-imgs'
class HogCard extends React.Component {
    state = {
        showDetails: false,
    }

    clickHandle = () => {
        this.setState({
            showDetails: !this.state.showDetails
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

    render(){
        // console.log(this.props.hogObj)
        let hogImg = this.props.hogObj.name.replace(/ /g, "_").toLowerCase()
        let imgPath = require(`../hog-imgs/${hogImg}.jpg`);
        
       return (
           <div className="ui eight wide column"><br/>
               <p>{this.props.hogObj.name}</p><br/>
               <img src={imgPath} /><br/>
            <button onClick={this.clickHandle}>{this.state.showDetails ? "Hide" : "Show"} Details</button>
                {this.state.showDetails ? this.showDetails() : null}
           </div>
       )
    }
}


export default HogCard 