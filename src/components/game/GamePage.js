import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import './GamePage.css'

class GamePage extends Component{
    render() {
        return(
            <div className='main-game'>
                <Grid>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default GamePage;