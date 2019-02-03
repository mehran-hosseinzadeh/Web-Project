import React, {Component} from 'react';
import {Tab} from 'semantic-ui-react';
import './Stats.css'

class Stats extends Component {
    state = {
        leagues_stats: [],
    };
    static defaultProps = {
        id: 0,
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

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/toopchi/player');
            const players = await res.json();
            const player = players[0];
            console.log(player);
            const res2 = await fetch('http://127.0.0.1:8000/toopchi/player_highlights/' + player.id);
            const tmp = await res2.json();
            const leagues = JSON.parse(tmp.leagues);
            const highlights = JSON.parse(tmp.highlights);
            console.log(leagues);
            console.log(highlights);
            let leagues_stats = [];
            for(let i = 0; i < leagues.length; i = i + 1){
                let league_stats = [];
                for(let j = 0; j < highlights.length; j++){
                    if(highlights[j].league === leagues[i].league){
                        league_stats.push(highlights[j])
                    }
                }
                leagues_stats.push({
                    league: leagues[i].league,
                    events: league_stats
                })
            }
            console.log(leagues_stats);
            this.setState({
                leagues_stats
            })
        } catch (e) {
            console.log(e);
        }
    }

    makeTabs() {
        return this.state.leagues_stats.map((leagueStats, index) => {
            let events = '';
            for(let i = 0; i < leagueStats.events.length; i++){
                events = events + leagueStats.events[i].description + ' : ' + leagueStats.events[i].value.toString() + '\n'
            }
            console.log(leagueStats.events.length);
            console.log(events);
            return {
                menuItem: leagueStats.league,
                render: () =>
                    <Tab.Pane attached={false}>
                        <h2>
                            خلاصه ی عملکرد:
                        </h2>
                        <ul className={'Stats' + index}>
                            <div>
                                {events.split("\n").map((i,key) => {
                                    return <div key={key}>{i}</div>;
                                })}
                            </div>
                            {/*<li className='goals'>تعداد گل ها: {seasonStats.goals}</li>*/}
                            {/*<li className='passesToGoal'>تعداد پاس های گل: {seasonStats.passesToGoal}</li>*/}
                            {/*<li className='redCards'>تعداد کارت های قرمز: {seasonStats.redCards}</li>*/}
                            {/*<li className='yellowCards'>تعداد کارت های زرد: {seasonStats.yellowCards}</li>*/}
                            {/*<li className='gamesPlayed'>تعداد کل بازی های شرکت کرده: {seasonStats.gamesPlayed}</li>*/}
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

