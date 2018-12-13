import React, {Component} from 'react';
import {Header, Label} from "semantic-ui-react";
import './NewsHeading.css'


class NewsHeading extends Component{
    static defaultProps = {
        newsTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
        newsDate: '1397/9/16',
        newsSource: 'فارس',
        newsTags: ['استقلال', 'فوتبال', 'لیگ'],
    };

    showTags(){
        return this.props.newsTags.map((tag, index) => {
            return <Label key={index}>{tag}</Label>
        })
    }

    render(){
        return(
            <div className='newsHeading'>
                <Header as='h2'>
                    {this.props.newsTitle}
                    <Header.Subheader>{this.props.newsDate} منبع: {this.props.newsSource}</Header.Subheader>
                </Header>
                <div className='newsTags'>
                    {this.showTags()}
                </div>
            </div>
        )
    }
}

export default NewsHeading;