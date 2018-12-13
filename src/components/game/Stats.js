import React, {Component} from 'react';
import {Tab, Table} from 'semantic-ui-react';
import './Stats.css'

class Stats extends Component {

    static defaultProps = {
        stats: [
            {
                label: 'تعداد ضربات کرنر',
                team1: 5,
                team2: 8,
            }
            ,
            {
                label: 'تعداد گل ها',
                team1: 2,
                team2: 1,
            }
            ,
            {
                label: 'تعداد خطاها',
                team1: 7,
                team2: 5,
            }
            ,
            {
                label: 'تعداد موقعیت های گل',
                team1: 7,
                team2: 3,
            }
            ,
            {
                label: 'درصد مالکیت توپ',
                team1: 43,
                team2: 57,
            }
            ,
        ],
        playerOfMatch: {
            name: 'سعید سعیدی',
            team: 'استقلال',
        },
        teams: ['استقلال', 'پیکان'],
        exchanges: [
            {
                forTeam: 'استقلال',
                playerIn: 'حسن حسنی',
                playerOut: 'مهدی مهدوی',
                minute: 59,
            },
            {
                forTeam: 'استقلال',
                playerIn: 'حسن حسنی',
                playerOut: 'مهدی مهدوی',
                minute: 74,
            },
            {
                forTeam: 'استقلال',
                playerIn: 'حسن حسنی',
                playerOut: 'مهدی مهدوی',
                minute: 83,
            },
        ]
    };

    showHighlights() {
        return this.props.stats.map((stat) => {
            return (
                <Table.Row>
                    <Table.Cell>{stat.label}</Table.Cell>
                    <Table.Cell>{stat.team1}</Table.Cell>
                    <Table.Cell>{stat.team2}</Table.Cell>
                </Table.Row>
            )
        })
    }

    showExchanges() {
        return this.props.exchanges.map((exchange) => {
            return (
                <Table.Row>
                    <Table.Cell>{exchange.forTeam}</Table.Cell>
                    <Table.Cell>{exchange.playerIn}</Table.Cell>
                    <Table.Cell>{exchange.playerOut}</Table.Cell>
                    <Table.Cell>{exchange.minute}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <div className='stats'>
                <h2 className='statsTitle'>
                    آمار بازی
                </h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>آمار</Table.HeaderCell>
                            <Table.HeaderCell>{this.props.teams[0]}</Table.HeaderCell>
                            <Table.HeaderCell>{this.props.teams[1]}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.showHighlights()}
                    </Table.Body>
                </Table>
                <div className='playerOfMatch'>
                    <span className='playerOfMatchBox'>
                        بهترین بازیکن زمین:&nbsp;
                            <strong>
                                {this.props.playerOfMatch.name} از {this.props.playerOfMatch.team}
                            </strong>
                    </span>
                </div>
                <h2 className='exchangesTitle'>
                    تعویض ها
                </h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>تیم</Table.HeaderCell>
                            <Table.HeaderCell>وارد</Table.HeaderCell>
                            <Table.HeaderCell>خارج</Table.HeaderCell>
                            <Table.HeaderCell>دقیقه</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.showExchanges()}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default Stats;

