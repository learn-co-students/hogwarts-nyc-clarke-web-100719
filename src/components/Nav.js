import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br></br>
			<br></br>
			<div>
				<strong>Showing {props.greasedProp? "Just Greased Hogs! " : "All Hogs "}</strong><br></br>
				<button onClick={props.updateFilter}>Filter Hogs</button>
				<br></br>
				<strong>Sort Hogs</strong>
				<select onChange={(e) => props.sortHogs(e.target.value)}>
					<option value=""></option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
