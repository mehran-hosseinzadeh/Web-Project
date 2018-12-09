import React, {Component} from 'react';
import './NewsItem.css'

export default class NewsItem extends Component {
    render() {
        return (
            <li className='news'>
                <img className='newsImage' src={this.props.image} alt={this.props.title}/>
                <div className='newsContent'>
                    <div className='newsHeader'>
                        <h3 className='newsTitle'>{this.props.title}</h3>
                        <h6 className='newsDate'>{this.props.date}</h6>
                    </div>
                    <p className='newsDescription'>{this.props.description}</p>
                </div>
            </li>
        );
    }
}