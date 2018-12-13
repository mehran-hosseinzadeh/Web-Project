import React, {Component} from 'react';
import './App.css';
import PageHeader from "./components/home_page/PageHeader";
import LeagueTab from "./components/league/LeagueTab";
import {Header, Icon, Image} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <div style={{backgroundColor: "snow"}}>
                /*<PageHeader className="row"/>*/

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
