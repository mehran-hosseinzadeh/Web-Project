import React, {Component} from 'react';
import './NewsCategory.css'

export default class NewsCategory extends Component {
    render() {
        return (
            <h1 className='newsCategory'>{this.props.title}</h1>
        );
    }
}