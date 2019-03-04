import React from 'react'

import { Button, Form, Grid } from 'semantic-ui-react';
import '../App.css'

const OpeningPage = (props) => {

	return (
		<Grid id='open-page'>
			<Form
				id='login'
				onSubmit={props.submitHandler}>
				<h1 id='title'>THE PURSUIT OF POKENESS</h1>
				<Form.Field>
					<input 
						placeholder='Name'
						name='name' />
				</Form.Field>
				
				<Form.Field>
					<input 
						placeholder='Password'
						name='password' />
				</Form.Field>
			
				<Button 
					id='submit-btn' 
					type='submit'>
					Submit
				</Button>
			
			</Form>
		</Grid>
	)
}

export default OpeningPage;