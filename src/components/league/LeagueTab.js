import React, {Component} from 'react'
import {Grid, Segment, Tab} from 'semantic-ui-react'
import LeagueTable from "./LeagueTable";
import LeagueSeasonTable from "./LeagueSeasonTable";

const panes = [
    {
        menuItem: 'لالیگا', render: () => <Tab.Pane>
            <LeagueTable/>
            <LeagueSeasonTable/>
        </Tab.Pane>
    },
    {
        menuItem: 'لوشامپیونه', render: () => <Tab.Pane>
            <LeagueTable/>
            <LeagueSeasonTable/>
        </Tab.Pane>
    },
    {
        menuItem: 'لیگ برتر خلیج فارس', render: () => <Tab.Pane>

        </Tab.Pane>
    },
];

export default class LeagueTab extends Component {
    render() {
        return (
            [
                <Grid className="center aligned">
                    <Grid.Column width={10} className="center aligned">
                        <Segment>
                            <LeagueTable/>
                            <LeagueSeasonTable/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            ]
        );
    }
}
