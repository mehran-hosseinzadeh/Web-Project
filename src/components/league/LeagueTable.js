import _ from 'lodash'
import React, {Component} from 'react'
import {Divider, Header, Image, Table} from 'semantic-ui-react'

const tableData = [
    {gameNumber: 1, team1: "استقلال", team2: "سپاهان", result: "2 - 1", team1Point: "43", team2Point: "23"},
    {gameNumber: 2, team1: "استقلال", team2: "فولاد", result: "1 - 3", team1Point: "46", team2Point: "23"},
    {gameNumber: 3, team1: "سپاهان", team2: "فولاد", result: "0 - 0", team1Point: "32", team2Point: "23"},
    {gameNumber: 4, team1: "سپاهان", team2: "ذوب آهن", result: "4 - 1", team1Point: "28", team2Point: "23"},
    {gameNumber: 5, team1: "نفت آبادان", team2: "استقلال", result: "1 - 1", team1Point: "37", team2Point: "23"},
    {gameNumber: 6, team1: "نفت آبادان", team2: "سپاهان", result: "0 - 2", team1Point: "2132", team2Point: "23"},
    {gameNumber: 7, team1: "ذوب آهن", team2: "استقلال", result: "2 - 2", team1Point: "2132", team2Point: "23"},
    {gameNumber: 8, team1: "ذوب آهن", team2: "نفت آبادان", result: "1 - 2", team1Point: "2132", team2Point: "23"},
    {gameNumber: 9, team1: "فولاد", team2: "ذوب آهن", result: "1 - 1", team1Point: "2132", team2Point: "23"},
    {gameNumber: 10, team1: "فولاد", team2: "نفت آبادان", result: "0 - 0", team1Point: "2132", team2Point: "23"},
];

export default class LeagueTable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    };

    handleSort = clickedColumn => () => {
        const {column, data, direction} = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            });
            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };

    render() {
        const {column, data, direction} = this.state;

        return (
            [
                <Header as='h3' className="center aligned">
                    <Image src="http://www.varzesh11.com/images/user/post/138283_991577854.jpg"/>
                    <br/>
                    لیگ برتر خلیج فارس
                </Header>,
                <Table sortable celled style={{direction: "ltr"}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={column === 'gameNumber' ? direction : null}
                                onClick={this.handleSort('gameNumber')}
                            >
                                Game Number
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'team1' ? direction : null}
                                onClick={this.handleSort('team1')}
                            >
                                First Team
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'team2' ? direction : null}
                                onClick={this.handleSort('team2')}
                            >
                                Second Team
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'result' ? direction : null}
                            >
                                Result
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'team1Point' ? direction : null}
                            >
                                First Team Point
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'team2Point' ? direction : null}
                            >
                                Second Team Point
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {_.map(data, ({gameNumber, team1, team2, result, team1Point, team2Point}) => (
                            <Table.Row key={gameNumber}>
                                <Table.Cell>{gameNumber}</Table.Cell>
                                <Table.Cell>{team1}</Table.Cell>
                                <Table.Cell>{team2}</Table.Cell>
                                <Table.Cell>{result}</Table.Cell>
                                <Table.Cell>{team1Point}</Table.Cell>
                                <Table.Cell>{team2Point}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>,
                <Divider/>
            ]
        )
    }
}