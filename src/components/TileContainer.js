import React from 'react'
import Tile from './Tile'

export default class TileContainer extends React.Component{
    
    render(){
    return (<div className="ui grid container"> {this.props.hogs.map(hog => <Tile hogInfo={hog} />)} </div>)
    }

}