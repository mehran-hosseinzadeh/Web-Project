import React, {Component} from 'react';
import NewsHeading from "./NewsHeading";
import NewsBody from "./NewsBody";
import NewsCommentSection from "./NewsCommentSection";
import './NewsPage.css'
import {Segment} from "semantic-ui-react";

class NewsPage extends Component{
    render() {
        return (
            <Segment>
                <NewsHeading newsTitle={this.props.newsTitle} newsDate = {this.props.newsDate} newsSource={this.props.newsSource}/>
                <NewsBody newsBody = {this.props.newsBody}/>
                <NewsCommentSection/>
            </Segment>
        );
    }
}
export default NewsPage;