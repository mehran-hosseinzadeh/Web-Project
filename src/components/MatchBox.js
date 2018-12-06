import React, {Component} from 'react';
import MatchItem from "./MatchItem";
import MatchTitle from "./MatchTitle";

;

export default class MatchBox extends Component {

    static defaultProps = {
        footballMatches: [
            {
                dateTime: '25/2/1397',
                team1: "Dafsgd",
                team2: "FDShgfds",
                result: "121 - e324",
                status: " estger"
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
            <aside>
                <MatchTitle title={this.props.footballTitle}/>
                <ul>
                    {this.showMatches()}
                </ul>
            </aside>
        );
    };
}