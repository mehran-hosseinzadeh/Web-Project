import React, {Component} from 'react'
import {Divider, Header, Segment} from "semantic-ui-react";
import LeagueTab from "./LeagueTab";

class LeaguePage extends Component{
    render() {
        return(
            <div className='main-league'>
                <Segment>
                    <Header>
                        لیگ های در حال اجرا
                    </Header>
                    <LeagueTab/>
                    <Divider/>
                    <Header>
                        لیگ های قدیمی
                    </Header>
                    <LeagueTab/>
                </Segment>
            </div>
        )
    }
}

export default LeaguePage;