import React, {Component} from 'react'
import {Button, Divider, Form, Grid, Header, Segment, Table} from "semantic-ui-react";
import LeagueTab from "./LeagueTab";
import {Link, Route} from "react-router-dom";
import myConstants from "../../myConstants";


class LeaguePage extends Component {

    state = {
        all_current_leagues: [],
        all_past_leagues: []
    };
    static defaultProps = {
        match: "",
        currentLeague: [
            {name: "لالیگا 18 - 19", key: "1"},
            {name: "لیگ برتر 18 - 19", key: "2"},
            {name: "لوشامپیونه 18 - 19", key: "3"},
            {name: "لیگ خلیج فارس 18 - 19", key: "4"},
        ],
        pastLeague: [
            {name: "لالیگا 17 - 18", key: "5"},
            {name: "لیگ برتر 17 - 18", key: "6"},
            {name: "لوشامپیونه 17 - 18", key: "7"},
            {name: "لیگ خلیج فارس 17 - 18", key: "8"},
            {name: "لالیگا 16 - 17", key: "9"},
            {name: "لیگ برتر 16 - 17", key: "10"},
            {name: "لوشامپیونه 16 - 17", key: "11"},
            {name: "لیگ خلیج فارس 16 - 17", key: "12"},
            {name: "لالیگا 15 - 16", key: "13"},
            {name: "لیگ برتر 15 - 16", key: "14"},
            {name: "لوشامپیونه 15 - 16", key: "15"},
            {name: "لیگ خلیج فارس 15 - 16", key: "16"},
        ],
    };


    async componentDidMount() {
        const ip = myConstants.get_ip();
        let res = await fetch('http://' + ip + ':8000/toopchi/all_leagues/current');
        let all_current_leagues = await res.json();
        all_current_leagues = JSON.parse(all_current_leagues);
        res = await fetch('http://' + ip + ':8000/toopchi/all_leagues/past');
        let all_past_leagues = await res.json();
        all_past_leagues = JSON.parse(all_past_leagues);
        this.setState({
            all_current_leagues,
            all_past_leagues
        });

    }

    currentLeagues = () => {
        console.log(this.state.all_current_leagues);
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            نام لیگ ها
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.all_current_leagues.map((name, key) => {
                        return (
                            <Link to={"/league/" + name.league_id}>
                                <Table.Row key={key}>
                                    <Table.Cell>{name.league_name}</Table.Cell>
                                </Table.Row>
                            </Link>
                        )
                    })}
                </Table.Body>
            </Table>
        )
    };
    pastLeagues = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            نام لیگ ها
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.all_past_leagues.map((name, key) => {
                        return (
                            <Link to={"/league/" + name.league_id}>
                                <Table.Row key={key}>
                                    <Table.Cell>{name.league_name}</Table.Cell>
                                </Table.Row>
                            </Link>
                        )
                    })}
                </Table.Body>
            </Table>
        )
    };
    Leagues = () => {
        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Segment className="center aligned">
                        <Form unstackable>
                            <Form.Group>
                                <Form.Input placeholder='نام لیگ'/>
                                <Button type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                        <Divider/>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Segment className="center aligned">
                                        <Header>
                                            لیگ های جاری
                                        </Header>
                                        {this.currentLeagues()}
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Segment className="center aligned">
                                        <Header>
                                            لیگ های گذشته
                                        </Header>
                                        {this.pastLeagues()}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    };

    render() {
        console.log(this.props.match);
        return (
            <div className='main-league'>
                {this.Leagues()}
            </div>
        )
    }
}


const League = () => <LeagueTab/>;


export default LeaguePage;