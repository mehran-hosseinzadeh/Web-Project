import _ from 'lodash'
import React, {Component} from 'react'
import {Divider, Header, Image, Table} from 'semantic-ui-react'

const tableData = [
    {game_id: 1, game_first_team: "استقلال", game_second_team: "سپاهان", game_result: "2 - 1", game_first_team_point: "43", game_second_team_point: "23"},
    {game_id: 2, game_first_team: "استقلال", game_second_team: "فولاد", game_result: "1 - 3", game_first_team_point: "46", game_second_team_point: "23"},
    {game_id: 3, game_first_team: "سپاهان", game_second_team: "فولاد", game_result: "0 - 0", game_first_team_point: "32", game_second_team_point: "23"},
    {game_id: 4, game_first_team: "سپاهان", game_second_team: "ذوب آهن", game_result: "4 - 1", game_first_team_point: "28", game_second_team_point: "23"},
    {game_id: 5, game_first_team: "نفت آبادان", game_second_team: "استقلال", game_result: "1 - 1", game_first_team_point: "37", game_second_team_point: "23"},
    {game_id: 6, game_first_team: "نفت آبادان", game_second_team: "سپاهان", game_result: "0 - 2", game_first_team_point: "2132", game_second_team_point: "23"},
    {game_id: 7, game_first_team: "ذوب آهن", game_second_team: "استقلال", game_result: "2 - 2", game_first_team_point: "2132", game_second_team_point: "23"},
    {game_id: 8, game_first_team: "ذوب آهن", game_second_team: "نفت آبادان", game_result: "1 - 2", game_first_team_point: "2132", game_second_team_point: "23"},
    {game_id: 9, game_first_team: "فولاد", game_second_team: "ذوب آهن", game_result: "1 - 1", game_first_team_point: "2132", game_second_team_point: "23"},
    {game_id: 10, game_first_team: "فولاد", game_second_team: "نفت آبادان", game_result: "0 - 0", game_first_team_point: "2132", game_second_team_point: "23"},
];

export default class LeagueTable extends Component {
    static defaultProps = {
        allGames: []
    };

    state = {
        column: null,
        data: [],
        direction: null,
    };

    async componentDidMount(){
        this.setState({
            data: this.props.allGames
        });
    }

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
                                sorted={column === 'game_id' ? direction : null}
                                onClick={this.handleSort('game_id')}
                            >
                                Game Number
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'game_first_team' ? direction : null}
                                onClick={this.handleSort('game_first_team')}
                            >
                                First Team
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'game_second_team' ? direction : null}
                                onClick={this.handleSort('game_second_team')}
                            >
                                Second Team
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'game_result' ? direction : null}
                            >
                                game_result
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'game_first_team_point' ? direction : null}
                            >
                                First Team Point
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'game_second_team_point' ? direction : null}
                            >
                                Second Team Point
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {_.map(data, ({game_id, game_first_team, game_second_team, game_result, game_first_team_point, game_second_team_point}) => (
                            <Table.Row key={game_id}>
                                <Table.Cell>{game_id}</Table.Cell>
                                <Table.Cell>{game_first_team}</Table.Cell>
                                <Table.Cell>{game_second_team}</Table.Cell>
                                <Table.Cell>{game_result}</Table.Cell>
                                <Table.Cell>{game_first_team_point}</Table.Cell>
                                <Table.Cell>{game_second_team_point}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>,
                <Divider/>
            ]
        )
    }
}