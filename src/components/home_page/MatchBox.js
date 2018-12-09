import React, {Component} from 'react';
import MatchItem from "./MatchItem";
import MatchTitle from "./MatchTitle";
import './MatchBox.css';

export default class MatchBox extends Component {

    static defaultProps = {
        footballMatches: [
            {
                dateTime: '25/2/1397',
                team1: "استقلال",
                team2: "پرسپولیس",
                result: "0-2",
                status: " نهایی"
            },
        ],
        footballTitle: "فوتبال"
    };

    showMatches() {
        return this.props.footballMatches.map(news => {
            return <MatchItem dateTime={news.dateTime} team1={news.team1} team2={news.team2} result={news.result} status={news.status}/>
        })
    }

    render() {
        return (
            <aside className='matchBox'>
                <MatchTitle title={this.props.footballTitle}/>
                <ul className='matches'>
                    {this.showMatches()}
                </ul>
            </aside>
        );
    };
}