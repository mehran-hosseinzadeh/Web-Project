import React, {Component} from 'react';
import './MatchItem.css'

export default class MatchItem extends Component{
    render() {
        return (
            <div className='matchItem'>
                <div className='matchDateTime'>{this.props.dateTime}</div>
                <div className='matchStatus'>{this.props.status}</div>
                <div className='matchDesc'>
                    <span className='matchTeam1'>
                        {this.props.team1}
                    </span>
                    <span className='matchResult'>
                        {this.props.result}
                    </span>
                    <span className='matchTeam2'>
                        {this.props.team2}
                    </span>
                </div>
            </div>
        );
    }
}