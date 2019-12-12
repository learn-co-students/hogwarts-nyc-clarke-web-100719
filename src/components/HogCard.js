import React from 'react'

class HogCard extends React.Component {
    state = {
        detailsDisplayed: false,
        display: "block"
    }
    
    toggleDetails = () => {
        this.setState({
            detailsDisplayed: !this.state.detailsDisplayed
        })
    }

    showDetails = () => {
        if (this.state.detailsDisplayed) {
            return (
                <div className="details">
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Greased? {this.props.hog.greased ? "True" : "False"}</p>
                    <p>Weight: {this.props.hog.weight}</p>
                    <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
                </div>
            )
        }
    }

    hideHog = () => {
        this.setState({
            display: "none"
        })
    }

    slugify = (string) => {
        return string.toLowerCase().replace(/ /g, "_")
    }

    hogImage = () => {
        if (this.props.hog.createdByForm) {
            return "https://www.peta.org/wp-content/uploads/2017/07/iStock-586714878_HadelProductions-668x336.jpg?20190104021130"
        } else {
            return require(`../hog-imgs/${this.slugify(this.props.hog.name)}.jpg`)
        }
    }
    
    render() {
        console.log(this.props.hog)
        return (
            <div className="hogcard" style={{display: this.state.display}}>
                <h3>{this.props.hog.name}</h3>
                <img src={this.hogImage()} alt="a piggy"/><br></br>
                <button onClick={this.toggleDetails}>Details</button>
                {this.showDetails()}
                <button onClick={this.hideHog} >Hide Hog</button>
            </div>
        )
    }
}

export default HogCard