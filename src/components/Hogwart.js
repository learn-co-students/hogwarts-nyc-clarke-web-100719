import React, { Component } from 'react';
import { imgMap } from "./Imports";


class Hogwart extends Component {

   state = {
        isVisible: false
    };

    hideDetails = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    };

    details = () => {
          return <div>
              <h2>{this.props.specialty}</h2>
              <h2>{this.props.greased}</h2>
              <h2>{this.props.weight}</h2>
          </div>
    };

    render() {
        return (
            <div className="pigTile" onClick={this.hideDetails}>
                {/*<img src={imgMap[this.props.name]} alt={this.props.name}/>*/}
                {/*<h2>{this.props.name}</h2>*/}

                {/*{this.state.isVisible ? this.details() : ""}*/}

                <div className="ui card">
                    <div className="image">
                        <img src={imgMap[this.props.name]} alt={this.props.name}/>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.name}</a>
                        <div className="meta">
                            <span className="date"></span>
                        </div>
                        <div className="description">
                            {this.props.specialty}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="pound icon"></i>
                            {this.props.weight}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hogwart;