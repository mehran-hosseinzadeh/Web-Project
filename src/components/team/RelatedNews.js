import React, {Component} from 'react';
import './RelatedNews.css'
import {Container, Grid, Header, Image} from "semantic-ui-react";


class RelatedNews extends Component {

    static defaultProps = {
        allNews: [
            {
                newsImage: 'camels.jpg',
                newsBody: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
                newsTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                newsDate: '1397/9/16',
            },
            {
                newsImage: 'camels.jpg',
                newsBody: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
                newsTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                newsDate: '1397/9/16',
            },
        ]
    };

    showAllNews() {
        return this.props.allNews.map((news, index) => {
            return (
                <li className={'news' + index}>
                    <Grid>
                        <Grid.Column width={4}>
                            <Image src={news.newsImage} rounded/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header as='h4'>
                                {news.newsTitle}
                                <Header.Subheader>{news.newsDate}</Header.Subheader>
                            </Header>
                            <Container>
                                <p className='relatedNewsBody'>
                                    {news.newsBody}
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
            <ul className='teamRelatedNews'>
                {this.showAllNews()}
            </ul>
        )
    }
}

export default RelatedNews;