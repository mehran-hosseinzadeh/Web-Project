import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
    {name: "سپاهان", point: "42", gamePlayed: "14", rank: "1", goalsFor: "40", goalsAway: "12"},
    {name: "ابومسلم", point: "40", gamePlayed: "14", rank: "2", goalsFor: "32", goalsAway: "11"},
    {name: "پدیده", point: "39", gamePlayed: "14", rank: "3", goalsFor: "31", goalsAway: "23"},
    {name: "استقلال", point: "38", gamePlayed: "14", rank: "4", goalsFor: "25", goalsAway: "9"},
    {name: "پرسپولیس", point: "38", gamePlayed: "14", rank: "5", goalsFor: "30", goalsAway: "30"},
    {name: "فولاد", point: "37", gamePlayed: "14", rank: "6", goalsFor: "21", goalsAway: "8"},
    {name: "ذوب آهن", point: "36", gamePlayed: "14", rank: "7", goalsFor: "16", goalsAway: "12"},
    {name: "نفت آبادان", point: "33", gamePlayed: "14", rank: "8", goalsFor: "23", goalsAway: "40"},
];

export default class LeagueSeasonTable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    };

    static defaultProps = {
        allGames: []
    };

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state;

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
        const { column, data, direction } = this.state;

        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'rank' ? direction : null}
                        >
                            رتبه
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                        >
                            نام تیم
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gamePlayed' ? direction : null}
                        >
                            تعداد بازی
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'goalsFor' ? direction : null}
                            onClick={this.handleSort('goalsFor')}
                        >
                            گل زده
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'goalsAway' ? direction : null}
                            onClick={this.handleSort('goalsAway')}
                        >
                            گل خورده
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'point' ? direction : null}
                            onClick={this.handleSort('point')}
                        >
                            امتیاز
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({rank, name, gamePlayed, goalsFor, goalsAway, point}) => (
                        <Table.Row key={name}>
                            <Table.Cell>{rank}</Table.Cell>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{gamePlayed}</Table.Cell>
                            <Table.Cell>{goalsFor}</Table.Cell>
                            <Table.Cell>{goalsAway}</Table.Cell>
                            <Table.Cell>{point}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}
