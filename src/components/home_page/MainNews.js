import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {Container, Image} from "semantic-ui-react";
import {Header} from "semantic-ui-react";

class MainNews extends Component{
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

    showMainNews() {
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
            <ul className='mainNews'>
                {this.showMainNews()}
            </ul>
        )
    }
}

export default MainNews;