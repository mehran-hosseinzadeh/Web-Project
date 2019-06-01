import React, {Component} from 'react';
import './Formations.css'
import {Grid, Table} from "semantic-ui-react";

class Formations extends Component {
    static defaultProps = {
        mainFormations: [
            [
                {
                    name: 'سعید سعیدی',
                    number: 1,
                    post: 'دروازه بان',
                },
                {
                    name: 'سعید سعیدی',
                    number: 2,
                    post: 'دفاع',
                },
                {
                    name: 'سعید سعیدی',
                    number: 3,
                    post: 'دفاع',
                },
                {
                    name: 'سعید سعیدی',
                    number: 4,
                    post: 'دفاع',
                },
                {
                    name: 'سعید سعیدی',
                    number: 5,
                    post: 'هافبک دفاعی',
                },
                {
                    name: 'سعید سعیدی',
                    number: 6,
                    post: 'هافبک دفاعی',
                },
                {
                    name: 'سعید سعیدی',
                    number: 7,
                    post: 'هافبک میانی',
                },
                {
                    name: 'سعید سعیدی',
                    number: 8,
                    post: 'هافبک حمله',
                },
                {
                    name: 'سعید سعیدی',
                    number: 9,
                    post: 'هافبک حمله',
                },
                {
                    name: 'سعید سعیدی',
                    number: 10,
                    post: 'مهاجم',
                },
                {
                    name: 'سعید سعیدی',
                    number: 11,
                    post: 'مهاجم',
                },
            ],
            [
                {
                    name: 'رضا رضایی',
                    number: 1,
                    post: 'دروازه بان',
                },
                {
                    name: 'رضا رضایی',
                    number: 2,
                    post: 'دفاع',
                },
                {
                    name: 'رضا رضایی',
                    number: 3,
                    post: 'دفاع',
                },
                {
                    name: 'رضا رضایی',
                    number: 4,
                    post: 'دفاع',
                },
                {
                    name: 'رضا رضایی',
                    number: 5,
                    post: 'هافبک دفاعی',
                },
                {
                    name: 'رضا رضایی',
                    number: 6,
                    post: 'هافبک دفاعی',
                },
                {
                    name: 'رضا رضایی',
                    number: 7,
                    post: 'هافبک میانی',
                },
                {
                    name: 'رضا رضایی',
                    number: 8,
                    post: 'هافبک حمله',
                },
                {
                    name: 'رضا رضایی',
                    number: 9,
                    post: 'هافبک حمله',
                },
                {
                    name: 'رضا رضایی',
                    number: 10,
                    post: 'مهاجم',
                },
                {
                    name: 'رضا رضایی',
                    number: 11,
                    post: 'مهاجم',
                },
            ],
        ],
        benchFormations: [
            [
                {
                    name: 'حسین حسینی',
                    number: 12,
                    post: 'دروازه بان',
                },
                {
                    name: 'حسین حسینی',
                    number: 13,
                    post: 'دفاع',
                },
                {
                    name: 'حسین حسینی',
                    number: 14,
                    post: 'هافبک میانی',
                },
                {
                    name: 'حسین حسینی',
                    number: 15,
                    post: 'هافبک حمله',
                },
                {
                    name: 'حسین حسینی',
                    number: 16,
                    post: 'مهاجم',
                },
            ],
            [
                {
                    name: 'حمید حمیدی',
                    number: 12,
                    post: 'دروازه بان',
                },
                {
                    name: 'حمید حمیدی',
                    number: 13,
                    post: 'دفاع',
                },
                {
                    name: 'حمید حمیدی',
                    number: 14,
                    post: 'هافبک میانی',
                },
                {
                    name: 'حمید حمیدی',
                    number: 15,
                    post: 'هافبک حمله',
                },
                {
                    name: 'حمید حمیدی',
                    number: 16,
                    post: 'مهاجم',
                },
            ],
        ],
        teams: ['استقلال', 'پیکان'],
        teamIndex: 0,
    };

    showFormations(formation, index) {
        console.log(formation);
        return formation[index].map((player) => {
            return (
                <Table.Row>
                    <Table.Cell>{player.name}</Table.Cell>
                    {/*<Table.Cell>{player.number}</Table.Cell>*/}
                    <Table.Cell>{player.post}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <div className='formation'>
                <h2 className='teamTitle'>
                    ترکیب تیم {this.props.teams[this.props.teamIndex]}
                </h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>نام</Table.HeaderCell>
                            {/*<Table.HeaderCell>شماره</Table.HeaderCell>*/}
                            <Table.HeaderCell>پست</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell/>
                            <Table.Cell>
                                <h3>
                                    ترکیب اصلی
                                </h3>
                            </Table.Cell>
                            <Table.Cell/>
                        </Table.Row>
                        {this.showFormations(this.props.mainFormations, this.props.teamIndex)}
                        {/*<Table.Row>*/}
                            {/*<Table.Cell/>*/}
                            {/*<Table.Cell>*/}
                                {/*<h3>*/}
                                    {/*ترکیب ذخیره*/}
                                {/*</h3>*/}
                            {/*</Table.Cell>*/}
                            {/*<Table.Cell/>*/}
                        {/*</Table.Row>*/}
                        {/*{Formations.showFormations(this.props.benchFormations, this.props.teamIndex)}*/}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default Formations;