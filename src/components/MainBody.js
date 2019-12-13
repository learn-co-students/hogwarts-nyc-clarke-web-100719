import React from 'react'
import HogCard from './HogCard.js'
import NewHogForm from './NewHogForm.js'

class MainBody extends React.Component {
    render() {
        return (
            <div className="mainbody">
                <NewHogForm newHogInfo={this.props.newHogInfo} />
                {this.props.hogsData.map(hog => <HogCard key={hog.name} hog={hog} />)}
                {/* can also do, but have to change HogCard: 
                {this.state.hogsArray.map(hog => <HogCard key={hog.name} {...hog} />)} */}
            </div>
        )
    }
}

export default MainBody
