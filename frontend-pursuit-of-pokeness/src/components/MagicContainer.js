import React, { Component } from 'react'
import Profile from './Profile'
import PokeStats from './PokeStats'
import Fight from './Fight'
import CatchSuccess from './CatchSuccess'
import CatchFail from './CatchFail'

import { Segment } from 'semantic-ui-react'



// class MagicContainer extends Component {
// 	constructor(props) {
// 		super(props)
// 	}
    
// 	render() {
// 		console.log(this.props.selectedPoke)

// 		// const profile = <Profile />
// 		const pokeStats = <PokeStats selectedPoke={this.props.selectedPoke} wild={this.props.wild} />

// 		// const fight = <Fight selectedPoke={this.state.selectedPoke} wildPoke={this.state.wildPoke} />

// 		// const success = <CatchSuccess wildPoke={this.state.wildPoke} />

// 		const fail = <CatchFail wildPoke={this.props.wildPoke} />


// 		return (
// 			<Segment.Group className="magicCont">
// 				<Segment compact >
// 					<h3 className="labels">Magic Container</h3>
// 				</Segment>
				
// 				{this.props.selectedPoke === null ?
// 					<Segment id="magic">
// 						{fail}
// 					</Segment>
// 					:
// 					<Segment id="magic">
// 						{pokeStats}
// 					</Segment>
// 				}

// 			</Segment.Group>

// 		)
// 	}
// }


// export default MagicContainer



class MagicContainer extends Component {
	constructor(props) {
		super(props)
	}
    
	render() {
		// console.log(this.props.selectedPoke)

		const profile = <Profile />

		const pokeStats = <PokeStats
			selectedPoke={this.props.selectedPoke}
			wild={this.props.wild}
			makeMain={this.props.makeMain} 
			catchPoke={this.props.catchPoke}
			/>
		
		const fight = <Fight
			selectedPoke={this.props.selectedPoke}
			mainPoke={this.props.mainPoke} />
		
		const success = <CatchSuccess
			selectedPoke={this.props.selectedPoke} />
		
		const fail = <CatchFail
			selectedPoke={this.props.selectedPoke} />

		let renderMe

		if (this.props.renderMe === 'profile') {
			renderMe = profile 
		} else if (this.props.renderMe === 'stats') {
			renderMe = pokeStats 
		} else if (this.props.renderMe === 'fight') {
			renderMe = fight
		} else if (this.props.renderMe === 'success') {
			renderMe = success
		} else if (this.props.renderMe === 'fail') {
			renderMe = fail
		}
	
		return (
			<Segment.Group className="magicCont">
				<Segment compact >
					<h3 className="labels">Magic Container</h3>
				</Segment>
				
				<Segment id='magic'>
					{renderMe}
				</Segment>
			</Segment.Group>

		)
	}
}

export default MagicContainer
