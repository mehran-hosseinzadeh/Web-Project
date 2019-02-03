import React, {Component} from 'react';
import './RelatedNews.css'
import {Container, Grid, Header, Image} from "semantic-ui-react";


class RelatedNews extends Component {

    static defaultProps = {
        allNews: [
            {
                news_avatar: 'camels.jpg',
                news_body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
                news_title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                news_date: '1397/9/16',
            },
            {
                newsI_avatar: 'camels.jpg',
                news_body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
                news_title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                news_date: '1397/9/16',
            },
        ]
    };

    showAllNews() {
        return this.props.allNews.map((news, index) => {
            return (
                <li className={'news' + index}>
                    <Grid>
                        <Grid.Column width={2}>
                            <Image src={news.news_avatar} rounded/>
                        </Grid.Column>
                        <Grid.Column width={4}>
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
            )
        })
    }

    render() {
        return (
            <ul className='playerRelatedNews'>
                <h1>
                    اخبار مرتبط بر حسب:
                </h1>
                {this.showAllNews()}
            </ul>
        )
    }
}

export default RelatedNews