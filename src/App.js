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
import {Grid} from "semantic-ui-react";


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
                            <Route path="/team" component={Team}/>
                            <Route path="/news" component={News}/>
                            <Route path="/game" component={Game}/>
                            <Route path="/player" component={Player}/>
                        </Grid.Column>
                    </Grid>

                </div>
            </Router>
        )
    }

}

const Home = () => <HomePage/>;
const League = () => <LeaguePage/>;
const Team = () => <TeamPage/>;
const News = () => <NewsPage/>;
const Game = () => <GamePage/>;
const Player = () => <PlayerPage/>;
// const About = () => <h2>About</h2>;
// const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//
//         <ul>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.path}/:id`} component={Topic} />
//         <Route
//             exact
//             path={match.path}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );
// const Header = () => (
//     <ul>
//         <li>
//             <Link to="/">Home</Link>
//         </li>
//         <li>
//             <Link to="/about">About</Link>
//         </li>
//         <li>
//             <Link to="/topics">Topics</Link>
//         </li>
//     </ul>
// );

export default App;
