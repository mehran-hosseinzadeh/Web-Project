import React, {Component} from 'react';
import NewsHeading from "./NewsHeading";
import NewsBody from "./NewsBody";
import NewsCommentSection from "./NewsCommentSection";
import './NewsPage.css'
import {Segment} from "semantic-ui-react";

class NewsPage extends Component{
    static defaultProps = {
        match: "",
        news_id: 1,
    };

    state = {
        news: {},
        tags:[]
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/toopchi/news/' + this.props.news_id);
            const news = await res.json();
            console.log(news);
            const tags = [news.news_tag1, news.news_tag2, news.news_tag3]
            this.setState({
                tags,
                news
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Segment>
                <NewsHeading newsTitle={this.state.news.news_title} newsDate = {this.state.news.news_date} newsSource={this.state.news.news_source} newsTags = {this.state.tags}/>
                <NewsBody newsBody = {this.state.news.news_body} newsImage={this.state.news.news_image}/>
                <NewsCommentSection/>
            </Segment>
        );
    }
}
export default NewsPage;