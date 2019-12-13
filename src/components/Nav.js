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
			<button className="greased" onClick={props.filterHogs}>Greased?</button>
			<select onChange={props.sortHogs} >
				<option>Sort By:</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
		</div>
	)
}

export default Nav
