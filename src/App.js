import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LeagueTab from "./components/league/LeagueTab";
import HomePage from "./components/home_page/HomePage";
import LeaguePage from "./components/league/LeaguePage";
import TeamPage from "./components/team/TeamPage";
import NewsPage from "./components/news/NewsPage";
import GamePage from "./components/game/GamePage";
import PlayerPage from "./components/player/PlayerPage";
import PageHeader from "./components/home_page/PageHeader";
import {Grid, Header} from "semantic-ui-react";
import LoginPage from "./components/login/LoginPage";
import ForgetPasswordPage from "./components/login/ForgetPasswordPage";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <PageHeader className='row'/>,
                    <Grid>
                        <Grid.Column width={16}>
                            <Route exact path="/" component={Home}/>
                            <Route path="/league" component={League}/>
                            <Route path="/team/:id" component={Team}/>
                            <Route path="/news/:id" component={News}/>
                            <Route path="/game" component={Game}/>
                            <Route path="/player" component={Player}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/forget-password" component={ForgetPassword}/>
                        </Grid.Column>
                    </Grid>

                </div>
            </Router>
        )
    }

}

const Home = () => <HomePage/>;
const League = ({match}) => <LeaguePage match={match}/>;
const Team = ({match}) => <TeamPage match={match}/>;
const News = ({match}) => <NewsPage match={match}/>;
const Game = () => <GamePage/>;
const Player = () => <PlayerPage/>;
const Login = () => <LoginPage/>;
const ForgetPassword = () => <ForgetPasswordPage/>;

export default App;
