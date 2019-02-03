import React, {Component} from 'react';
import NewsHeading from "./NewsHeading";
import NewsBody from "./NewsBody";
import NewsCommentSection from "./NewsCommentSection";
import './NewsPage.css'
import {Segment, Tab} from "semantic-ui-react";
import RelatedNews from "./RelatedNews";
import myConstants from "../../myConstants";

class NewsPage extends Component{
    static defaultProps = {
        match: "",
        news_id: 1,
    };

    state = {
        news: {},
        tags:[],
        news_related_news: []
    };

    async componentDidMount() {
        let ip = myConstants.get_ip();
        try {
            const res = await fetch('http://' + ip + ':8000/toopchi/news/' + this.props.match.params.id);
            const news = await res.json();
            console.log(news);
            const tags = [news.news_tag1, news.news_tag2, news.news_tag3];
            let news_related_news = [];
            let res2 = await fetch('http://' + ip + ':8000/toopchi/news/related_news/tags/tag/' + tags[0] + '/' + news.news_id);
            let related_news = await res2.json();
            news_related_news[0] = {'type': 'اخبار مربوط با تگ 1', 'all_news': JSON.parse(related_news)};
            res2 = await fetch('http://' + ip + ':8000/toopchi/news/related_news/tags/tag/' + tags[1] + '/' + news.news_id);
            related_news = await res2.json();
            news_related_news[1] = {'type': 'اخبار مربوط با تگ 2', 'all_news': JSON.parse(related_news)};
            res2 = await fetch('http://' + ip + ':8000/toopchi/news/related_news/tags/tag/' + tags[2] + '/' + news.news_id);
            related_news = await res2.json();
            news_related_news[2] = {'type': 'اخبار مربوط با تگ 3', 'all_news': JSON.parse(related_news)};
            console.log(news_related_news);
            this.setState({
                tags,
                news,
                news_related_news
            });
            console.log("Mounted");
            console.log(this.state.news_related_news)
        } catch (e) {
            console.log(e);
        }
    }

    makeTabs() {
        console.log("makeTabs");
        console.log(this.state.news_related_news);
        return this.state.news_related_news.map((related_news, index) => {
            return {
                menuItem: related_news.type,
                render: () =>
                    <Tab.Pane attached={false}>
                        <RelatedNews allNews={related_news.all_news}/>
                    </Tab.Pane>
            }
        })
    }

    render() {
        return (
            <Segment>
                <NewsHeading newsTitle={this.state.news.news_title} newsDate = {this.state.news.news_date} newsSource={this.state.news.news_source} newsTags = {this.state.tags}/>
                <NewsBody newsBody = {this.state.news.news_body} newsImage={this.state.news.news_image}/>
                <span className='newsRelatedNews'>
                    <Tab menu={{vertical: true}} menuPosition='right' panes={this.makeTabs()}/>
                </span>
                <NewsCommentSection/>
            </Segment>
        );
    }
}
export default NewsPage;