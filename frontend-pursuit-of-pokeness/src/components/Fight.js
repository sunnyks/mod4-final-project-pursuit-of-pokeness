import React, { Component } from 'react'

import { Grid, Card, Button } from 'semantic-ui-react'
import '../stylesheets/userConsole.css'


class Fight extends Component { 
	render() {
		return (
			<Card.Group>
				<Card fluid id='fightcard'>
					<Grid id='fightgrid' columns='equal'>
						<Grid.Row stretched>
							
							<Grid.Column>
							</Grid.Column>
							
							<Grid.Column>
								<img src={this.props.selectedPoke.front} alt=''/>
							</Grid.Column>
	
						</Grid.Row>
	
						<Grid.Row stretched>
							
							<Grid.Column>
								<img src={this.props.mainPoke.back} alt=''/>
							</Grid.Column>
							
							<Grid.Column>
								<div>
									<Button id='catch-btn' color='green' onClick={this.props.pokeFate}>
										CATCH {this.props.selectedPoke.name.toUpperCase()}
									</Button>
								</div>
							</Grid.Column>
	
						</Grid.Row>
					</Grid>
				</Card>
			</Card.Group>
		)
	}
}

export default Fight;