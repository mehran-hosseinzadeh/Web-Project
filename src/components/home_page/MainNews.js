import React, {Component} from 'react';
import {Divider, Grid} from "semantic-ui-react";
import {Container, Image} from "semantic-ui-react";
import {Header} from "semantic-ui-react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class MainNews extends Component {
    static defaultProps = {
        allNews: [
            {
                news_avatar: 'camels.jpg',
                news_body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
                news_title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                news_date: '1397/9/16',
            },
            {
                news_avatar: 'camels.jpg',
                news_body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
                news_title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                news_date: '1397/9/16',
            },
        ]
    };

    showMainNews() {
        return this.props.allNews.map((news, index) => {
            return (
                <div>
                    <Link to={'/news/' + news.news_id}>
                        <li className={'news' + index}>
                            <Grid>
                                <Grid.Column width={4}>
                                    <Image src={news.news_avatar} rounded/>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header as='h4'>
                                        {news.news_title}
                                        <Header.Subheader>{news.news_date}</Header.Subheader>
                                    </Header>
                                    <Container>
                                        <p className='relatedNewsBody'>
                                            {news.news_body}
                                        </p>
                                    </Container>
                                </Grid.Column>
                            </Grid>
                        </li>
                    </Link>
                    <Divider/>
                </div>

            )
        })
    }

    render() {
        return (
            <ul className='mainNews'>
                {this.showMainNews()}
            </ul>
        )
    }
}

export default MainNews;