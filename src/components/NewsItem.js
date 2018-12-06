import React, {Component} from 'react';

export default class NewsItem extends Component{
    render() {
        return (
            <li>
                <img src = {this.props.image} alt = {this.props.title}/>
                <h1>{this.props.title}</h1>
                <h6>{this.props.date}</h6>
                <p>{this.props.description}</p>
            </li>
        );
    }
}