import React from 'react'
import MyPokemon from '../components/MyPokemon'
import MagicContainer from '../components/MagicContainer'

import { Grid } from 'semantic-ui-react';
import '../stylesheets/userConsole.css'


const UserConsole = (props) => {
    return (
        <Grid id='userConsole' columns='equal'>
            <Grid.Column>
                <MyPokemon 
                    kanto={props.kanto}
                    johto={props.johto}
                    hoenn={props.hoenn}
                    sinnoh={props.sinnoh} />
            </Grid.Column>

            <Grid.Column>
                <MagicContainer 
                    kanto={props.kanto}
                    selectedPoke={props.selectedPoke} 
                    wildPoke={props.wildPoke}
                    />
            </Grid.Column>
        </Grid>    
    )
}

export default UserConsole