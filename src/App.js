import React, {Component} from 'react';
import './App.css';
import PageHeader from "./components/home_page/PageHeader";
import NewsPage from "./components/news/NewsPage";
import HomePage from "./components/home_page/HomePage";
import GamePage from "./components/game/GamePage";
import PlayerPage from "./components/player/PlayerPage";
import TeamPage from "./components/team/TeamPage";
import LeaguePage from "./components/league/LeaguePage";
import {Grid} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            [
                <PageHeader className='row'/>,
                <Grid>
                    <Grid.Column width={16}>
                        <HomePage/>
                        <TeamPage/>
                        <LeaguePage/>
                        <NewsPage/>
                        <GamePage/>
                        <PlayerPage/>
                    </Grid.Column>
                </Grid>]
        )
    }
}

export default App;
