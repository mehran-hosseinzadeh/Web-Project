import React, {Component} from 'react';
import {Divider, Grid} from "semantic-ui-react";
import './GamePage.css'
import Stats from "./Stats";
import Formations from "./Formations";
import Report from "./Report";
import Highlights from "./Highlights";
import RelatedNews from "./RelatedNews";
import Media from "./Media";

class GamePage extends Component {
    render() {
        return (
            <div className='main-game'>
                <Report/>
                <Divider/>
                <br/>
                <Grid>
                    <Grid.Column width={3}>
                        <Formations teamIndex={0}/>
                        <div className='relatedNews'>
                            <h1>
                                اخبار مرتبط
                            </h1>
                            <RelatedNews/>
                            <h1>
                                گالری
                            </h1>
                        </div>
                        <Media/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Formations teamIndex={1}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div className='stats'>
                            <Stats/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Highlights/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default GamePage;