import React, {Component} from 'react';
import {Tab} from 'semantic-ui-react';
import './Stats.css'

class Stats extends Component {

    static defaultProps = {
        corners: [
            {
                teams1: 5,
                team2: 8,
            }
        ],
        goals: [
            {
                teams1: 2,
                team2: 1,
            }
        ],
        faults: [
            {
                teams1: 7,
                team2: 5,
            }
        ],
        goalChances: [
            {
                team1: 7,
                team2: 3,
            }
        ],
        possession: [
            {
                teams1: 43,
                team2: 57,
            }
        ],
    };

    render() {
        return (
            <ul className='gameStats'>
                {this.showStats()}
            </ul>
        )
    }
}

export default Stats;

