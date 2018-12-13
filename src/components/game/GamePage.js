import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import './GamePage.css'
import Stats from "./Stats";
import Formations from "./Formations";
import Report from "./Report";
import Highlights from "./Highlights";

class GamePage extends Component {
    render() {
        return (
            <div className='main-game'>
                <Report/>
                <Grid>
                    <Grid.Column width={3}>
                        <div className='stats'>
                            <Stats/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Formations teamIndex={0}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Formations teamIndex={1}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Highlights/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default GamePage;