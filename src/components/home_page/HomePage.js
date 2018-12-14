import React, {Component} from 'react';
import {Grid, Header, Segment, Select, Tab, Table} from "semantic-ui-react";
import MainNews from "./MainNews";
import './HomePage.css'

const panes = [
    {
        menuItem: {key: 'favorite', icon: 'like', content: 'موردعلاقه ها'},
        render: () => <Tab.Pane><MainNews/></Tab.Pane>,
    },
    {
        menuItem: {key: 'آخرین ها', icon: 'browser', content: 'آخرین ها'},
        render: () => <Tab.Pane><MainNews/></Tab.Pane>,
    },
];
const matches = [
    {guest: "سپاهان", scores: "2 - 1", host: "استقلال", time: "دیروز 11:30"},
    {guest: "صردبو", scores: "1 - 2", host: "سیمب", time: "دیروز 12:30"},
    {guest: "بسنتققسث", scores: "0 - 0", host: "یسمب", time: "دیروز 21:30"},
    {guest: "زرذر", scores: "1 - 1", host: "ملینت", time: "16:00"},
    {guest: "دنتدئ", scores: "در حال برگزاری", host: "تلیمل", time: "20:00"},
    {guest: "نممت", scores: "?????", host: "افحامبی", time: "22:30"},
    {guest: "خهحخه", scores: "?????", host: "خثهقخحث", time: "فردا 11:30"},
    {guest: "رئال مادرید", scores: "?????", host: "غصضعص", time: "فردا 12:30"},
];

function showTable() {
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
                {matches.map((data) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{data.host}</Table.Cell>
                            <Table.Cell>{data.scores}</Table.Cell>
                            <Table.Cell>{data.guest}</Table.Cell>
                            <Table.Cell>{data.time}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>

    )
}

const matchPanes = [
    {
        menuItem: {key: 'favorite', icon: 'like', content: 'موردعلاقه ها'},
        render: () => <Tab.Pane>
            {showTable()}
        </Tab.Pane>,
    },
    {
        menuItem: {key: 'آخرین ها', icon: 'browser', content: 'آخرین ها'},
        render: () => <Tab.Pane>
            {showTable()}
        </Tab.Pane>,
    },
];

export default class HomePage extends Component {

    static defaultProps = {
        matchFilters: [
            {key: 'بسکتبال', text: 'بسکتبال', value: 'بسکتبال'},
            {key: 'فوتبال', text: 'فوتبال', value: 'فوتبال'},
        ],
    };

    render() {
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
                                <Tab panes={panes}/>
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