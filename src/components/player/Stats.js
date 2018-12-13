import React, {Component} from 'react';
import {Tab} from 'semantic-ui-react';
import './Stats.css'

class Stats extends Component {

    static defaultProps = {
        seasonsStats: [
            {
                season: 'فصل 19',
                goals: 7,
                passesToGoal: 10,
                redCards: 1,
                yellowCards: 11,
                gamesPlayed: 26
            },
            {
                season: 'فصل 20',
                goals: 10,
                passesToGoal: 15,
                redCards: 3,
                yellowCards: 18,
                gamesPlayed: 30
            },
        ]
    };

    makeTabs() {
        return this.props.seasonsStats.map((seasonStats, index) => {
            return {
                menuItem: seasonStats.season,
                render: () =>
                    <Tab.Pane attached={false}>
                        <h2>
                            خلاصه ی عملکرد:
                        </h2>
                        <ul className={'Stats' + index}>
                            <li className='goals'>تعداد گل ها: {seasonStats.goals}</li>
                            <li className='passesToGoal'>تعداد پاس های گل: {seasonStats.passesToGoal}</li>
                            <li className='redCards'>تعداد کارت های قرمز: {seasonStats.redCards}</li>
                            <li className='yellowCards'>تعداد کارت های زرد: {seasonStats.yellowCards}</li>
                            <li className='gamesPlayed'>تعداد کل بازی های شرکت کرده: {seasonStats.gamesPlayed}</li>
                        </ul>
                    </Tab.Pane>
            }
        })
    }

    render() {
        return (
            <span className='playerStats'>
                <Tab menu={{vertical: true}} menuPosition='right' panes={this.makeTabs()}/>
            </span>
        )
    }
}

export default Stats;

