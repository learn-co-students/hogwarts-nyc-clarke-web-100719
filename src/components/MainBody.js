import React from 'react';
import hogs from '../porkers_data';
import HogCard from './HogCard';
import ag from '../hog-imgs/augustus_gloop.jpg';
import bop from '../hog-imgs/bay_of_pigs.jpg';
import c from '../hog-imgs/cherub.jpg';
import gn from '../hog-imgs/galaxy_note.jpg';
import lme from '../hog-imgs/leggo_my_eggo.jpg';
import m from '../hog-imgs/mudblood.jpg';
import ps from '../hog-imgs/piggy_smalls.jpg';
import pc from '../hog-imgs/porkchop.jpg';
import rd from '../hog-imgs/rainbowdash.jpg';
import s from '../hog-imgs/sobriety.jpg';
import tpc from '../hog-imgs/the_prosciutto_concern.jpg';
import t from '../hog-imgs/trouble.jpg';
import ts from '../hog-imgs/truffleshuffle.jpg';

const hogImgMap = {
    'Mudblood': m,
    'Porkchop': pc,
    'Cherub': c,
    'Piggy smalls': ps,
    'Trouble': t,
    'Sobriety': s,
    'Rainbowdash': rd,
    'TruffleShuffle': ts,
    'Bay of Pigs': bop,
    'The Prosciutto Concern': tpc,
    'Galaxy Note': gn,
    'Leggo My Eggo': lme,
    'Augustus Gloop': ag
}

export default class MainBody extends React.Component {
    state = {
        hogs: hogs,
        activeHog: null,
        isActive: false
    }

    setActiveHog = (name) => {
        this.setState(previousState => {
            return {
                activeHog: name,
            }
        })
    }

    // toggleActive = () => {
    //     this.setState(previousState => {
    //         return {
    //             isActive: !previousState.isActive 
    //         }
    //     })
    // }

    renderHogs = () => {
        let hogsToDisplay = [...this.state.hogs];
        if (this.props.onlyGreased) {
                hogsToDisplay = hogsToDisplay.filter(hog => hog.greased);
        }
        if (this.props.sortName) {
            hogsToDisplay = hogsToDisplay.sort((hogA,hogB) => hogA.name.localeCompare(hogB.name));
        }

        if (this.props.sortWeight) {
            hogsToDisplay = hogsToDisplay.sort((hogA, hogB) => hogA.weight - hogB.weight);
        }
        return hogsToDisplay.map(hog => {
            return <HogCard hog={hog} img={hogImgMap[hog.name]} key={hog.name} setActiveHog={this.setActiveHog} activeHog={this.state.activeHog}/>
        }
        )}
        

    render() {
        return(
            <div className="ui grid container">
                {this.renderHogs()}
            </div>
        )
    }
}