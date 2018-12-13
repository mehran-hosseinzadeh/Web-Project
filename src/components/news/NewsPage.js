import React, {Component} from 'react';
import NewsHeading from "./NewsHeading";
import NewsBody from "./NewsBody";
import NewsCommentSection from "./NewsCommentSection";

class NewsPage extends Component{
    render() {
        return (
            <div className='main-news'>
                <NewsHeading newsTitle={this.props.newsTitle} newsDate = {this.props.newsDate} newsSource={this.props.newsSource}/>
                <NewsBody newsBody = {this.props.newsBody}/>
                <NewsCommentSection/>
            </div>
        );
    }
}
export default NewsPage;