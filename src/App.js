import React, {Component} from 'react';
import './App.css';
import PageHeader from "./components/home_page/PageHeader";
import GamePage from "./components/game/GamePage";
import NewsBox from "./components/home_page/NewsBox";
import MatchBox from "./components/home_page/MatchBox";
import {Header, Icon} from "semantic-ui-react";
import LeagueTab from "./components/league/LeagueTab";
import NewsHeading from "./components/news/NewsHeading";
import NewsBody from "./components/news/NewsBody";
import NewsCommentSection from "./components/news/NewsCommentSection";
import NewsPage from "./components/news/NewsPage";
import LeagueTable from "./components/league/LeagueTable";
import PlayerPage from "./components/player/PlayerPage";
import TeamPage from "./components/team/TeamPage";

class App extends Component {
    render() {
        return (
            <div>
                <PageHeader className='row'/>
                {/*<TeamPage/>*/}
                {/*<LeagueTab/>*/}
                {/*<NewsPage/>*/}
                {/*<GamePage/>*/}
                {/*<PlayerPage/>*/}
            </div>
        )
    }

    /*
    render() {
        return (
            <div style={{backgroundColor: "snow"}}>
                <PageHeader className="row"/>
                <TeamPage/>

                <Timeline
                style={{direction: "rtl", position:"absolute"}}
                direction="left"
                icon="user"
                title="Title"
                time="Time"
                description="Description."
                color="red"
                tags={['tag1', 'tag2']}
                lineHeight={4}/>

                main page
                <div className='main'>
                <NewsBox/>
                <MatchBox/>
                </div>

                leagues page
                <div style={{marginTop: "20px"}}>
                <Header as='h2' icon textAlign='center'>
                <Icon name='baseball ball' circular />
                <Header.Content>Current League</Header.Content>
                </Header>
                </div>
                <LeagueTab className="ten wide column"/>
                <div style={{marginTop: "20px"}}>
                <Header as='h2' icon textAlign='center'>
                <Icon name='baseball ball' circular />
                <Header.Content>Past League</Header.Content>
                </Header>
                </div>
                <LeagueTab className="ten wide column"/>
            <div>
                <PageHeader/>
                <div className='main'>
                    <NewsBox/>
                    <MatchBox/>
                </div>
        );
    }
    */
}

export default App;
