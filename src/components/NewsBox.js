import React, {Component} from 'react';
import NewsTitle from "./NewsTitle";
import NewsItem from "./NewsItem";

export default class NewsBox extends Component {

    static defaultProps = {
        allNews: [
            {
                title: 'مهران',
                date: '25/2/1397',
                description: 'b,gukjgfuitouyuylitotyi',
                image: 'camels.jpg'
            }
        ]
    };

    showNews() {
        return this.props.allNews.map(news => {
            return <NewsItem title={news.title} date={news.date} description={news.description} image={news.image}/>
        })
    }

    render() {
        return (
            <div>
                <NewsTitle title='فوتبال'/>
                <ul>
                    {this.showNews()}
                </ul>

            </div>
        );
    };
}