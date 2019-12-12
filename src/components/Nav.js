import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span><br/>
			<div>
			Grease Filter: <button onClick={props.changeGreased}> {!props.greasedFilter ? "OFF": "ON"}</button>
			Sort By:
			<select onChange={(e) => props.handleSort(e.target.value)}>
				<option value="">default</option>
				<option value="name">name</option>
				<option value="weight">weight</option>
			</select>
			</div>
		</div>
	)
}

export default Nav
