import React, {Component} from 'react';
import {Grid, Header, Segment, Select, Tab, Table} from "semantic-ui-react";
import MainNews from "./MainNews";
import './HomePage.css'
import myConstants from "../../myConstants";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class HomePage extends Component {
    state = {
        latest_news: [],
        panes: [],
        latest_games: []
    };
    static defaultProps = {
        matchFilters: [
            {key: 'بسکتبال', text: 'بسکتبال', value: 'بسکتبال'},
            {key: 'فوتبال', text: 'فوتبال', value: 'فوتبال'},
        ],
        matches: [
            {guest: "سپاهان", scores: "2 - 1", host: "استقلال", time: "دیروز 11:30"},
            {guest: "صردبو", scores: "1 - 2", host: "سیمب", time: "دیروز 12:30"},
            {guest: "بسنتققسث", scores: "0 - 0", host: "یسمب", time: "دیروز 21:30"},
            {guest: "زرذر", scores: "1 - 1", host: "ملینت", time: "16:00"},
            {guest: "دنتدئ", scores: "در حال برگزاری", host: "تلیمل", time: "20:00"},
            {guest: "نممت", scores: "?????", host: "افحامبی", time: "22:30"},
            {guest: "خهحخه", scores: "?????", host: "خثهقخحث", time: "فردا 11:30"},
            {guest: "رئال مادرید", scores: "?????", host: "غصضعص", time: "فردا 12:30"},
        ]

    };

    async componentDidMount() {
        let ip = myConstants.get_ip();
        let res = await fetch('http://' + ip + ':8000/toopchi/latest_news');
        let news = await res.json();
        let latest_news = JSON.parse(news);
        console.log(latest_news);
        let panes = [
            {
                menuItem: {key: 'favorite', icon: 'like', content: 'موردعلاقه ها'},
                render: () =>
                    <Tab.Pane>
                        {/*<MainNews allNews={this.state.latest_news}/>*/}
                    </Tab.Pane>,
            },
            {
                menuItem: {key: 'آخرین ها', icon: 'browser', content: 'آخرین ها'},
                render: () => <Tab.Pane><MainNews allNews={this.state.latest_news}/></Tab.Pane>,
            },
        ];
        res = await fetch('http://' + ip + ':8000/toopchi/latest_games');
        let games = await res.json();
        let latest_games = JSON.parse(games);
        console.log(latest_games);
        this.setState({
            latest_games,
            latest_news,
            panes
        })
    }

    showTable() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>میزبان</Table.HeaderCell>
                        <Table.HeaderCell>نتیجه</Table.HeaderCell>
                        <Table.HeaderCell>میهمان</Table.HeaderCell>
                        <Table.HeaderCell> زمان </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.latest_games.map((data) => {
                        return (
                                <Table.Row>
                                    <Table.Cell>{data.game_first_team}</Table.Cell>
                                    <Link to={'/game/' + data.game_id}>
                                        <Table.Cell>{data.game_result}</Table.Cell>
                                    </Link>
                                    <Table.Cell>{data.game_second_team}</Table.Cell>
                                    <Table.Cell>{data.game_week}</Table.Cell>
                                </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

        )
    }

    render() {
        const matchPanes = [
            {
                menuItem: {key: 'favorite', icon: 'like', content: 'موردعلاقه ها'},
                render: () => <Tab.Pane>
                    {/*{this.showTable()}*/}
                </Tab.Pane>,
            },
            {
                menuItem: {key: 'آخرین ها', icon: 'browser', content: 'آخرین ها'},
                render: () => <Tab.Pane>
                    {this.showTable()}
                </Tab.Pane>,
            },
        ];
        return (
            <div className='main-home'>
                <Segment>
                    <Grid columns={16} className="center aligned">
                        <Grid.Column width={10}>
                            <Segment style={{backgroundColor: "ghostWhite"}} className="center aligned">
                                <Header>
                                    خبر ها
                                </Header>
                                <Select placeholder='ورزش ها ...' options={this.props.matchFilters}/>
                                <br/>
                                <br/>
                                <Tab panes={this.state.panes}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Segment style={{backgroundColor: "ghostWhite"}} className="center aligned">
                                <Header>
                                    بازی ها
                                </Header>
                                <Select placeholder='ورزش ها ...' options={this.props.matchFilters}/>
                                <br/>
                                <br/>
                                <Tab panes={matchPanes}/>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        );
    };


}