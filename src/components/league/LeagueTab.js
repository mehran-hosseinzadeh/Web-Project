import React, {Component} from 'react'
import {Grid, Segment, Tab} from 'semantic-ui-react'
import LeagueTable from "./LeagueTable";
import LeagueSeasonTable from "./LeagueSeasonTable";
import myConstants from "../../myConstants";

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

    static defaultProps = {
      match: ""
    };

    state = {
        all_games: []
    };

    async componentDidMount(){
        const ip = myConstants.get_ip();
        let res = await fetch('http://' + ip + ':8000/toopchi/league_all_games/' + this.props.match.params.id);
        let all_games = await res.json();
        all_games = JSON.parse(all_games);
        console.log(all_games);
        this.setState({
            all_games
        })
    }
    render() {
        console.log(this.props.match.params.id);
        return (
            [
                <Grid className="center aligned">
                    <Grid.Column width={10} className="center aligned">
                        <Segment>
                            <LeagueTable allGames={this.state.all_games}/>
                            <LeagueSeasonTable allGames={this.state.all_games}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            ]
        );
    }
}
