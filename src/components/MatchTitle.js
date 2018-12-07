import React, {Component} from 'react';
import './MatchTitle.css'

export default class MatchTitle extends Component {
    render() {
        return (
            <h1 className='matchTitle'>{this.props.title}</h1>
        );
    }
}