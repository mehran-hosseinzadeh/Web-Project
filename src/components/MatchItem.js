import React, {Component} from 'react';

export default class MatchItem extends Component{
    render() {
        return (
            <div>
                <div>{this.props.dateTime}</div>
                <div>{this.props.status}</div>
                <div>
                    <span>
                        {this.props.team1}
                    </span>
                    <span>
                        {this.props.result}
                    </span>
                    <span>
                        {this.props.team2}
                    </span>
                </div>
            </div>
        );
    }
}