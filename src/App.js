import React, {Component} from 'react';
import './App.css';
import PageHeader from "./components/home_page/PageHeader";
import {Grid, Icon} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import HomePage from "./components/home_page/HomePage";

class App extends Component {
    render() {
        return (
            <div style={{backgroundColor: "snow"}}>
                <PageHeader className="row"/>
                <Grid className="center aligned">
                    <Grid.Column width={15}>
                        <HomePage />
                        <div>
                            <Icon loading name='spinner' />
                            <Icon loading name='certificate' />
                            <Icon loading name='asterisk' />
                        </div>
                    </Grid.Column>
                </Grid>
                {/*<TeamPage/>*/}
                {/*<Timeline*/}
                {/*style={{direction: "rtl", position:"absolute"}}*/}
                {/*direction="left"*/}
                {/*icon="user"*/}
                {/*title="Title"*/}
                {/*time="Time"*/}
                {/*description="Description."*/}
                {/*color="red"*/}
                {/*tags={['tag1', 'tag2']}*/}
                {/*lineHeight={4}/>*/}

                {/*main page*/}
                {/*<div className='main'>*/}
                {/*<NewsBox/>*/}
                {/*<MatchBox/>*/}
                {/*</div>*/}

                {/*leagues page*/}
                {/*<div style={{marginTop: "20px"}}>*/}
                {/*<Header as='h2' icon textAlign='center'>*/}
                {/*<Icon name='baseball ball' circular />*/}
                {/*<Header.Content>Current League</Header.Content>*/}
                {/*</Header>*/}
                {/*</div>*/}
                {/*<LeagueTab className="ten wide column"/>*/}
                {/*<div style={{marginTop: "20px"}}>*/}
                {/*<Header as='h2' icon textAlign='center'>*/}
                {/*<Icon name='baseball ball' circular />*/}
                {/*<Header.Content>Past League</Header.Content>*/}
                {/*</Header>*/}
                {/*</div>*/}
                {/*<LeagueTab className="ten wide column"/>*/}


            </div>
        );
    }
}

export default App;
