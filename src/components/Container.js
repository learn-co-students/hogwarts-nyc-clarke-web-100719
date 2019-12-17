import React, {Component} from 'react'
import HogTile from './HogTile'

export default class Container extends Component {

    render () {
        return (
            <div className="ui grid container">{this.props.hogs.map(hog => <HogTile hogInfo={hog}/>)}</div>
        )
    }
}