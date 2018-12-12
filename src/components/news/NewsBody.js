import React, {Component} from 'react';
import {Container, Grid, Image} from "semantic-ui-react";
import './NewsBody.css'


class NewsBody extends Component {
    static defaultProps = {
        newsImage: 'camels.jpg',
        newsBody: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    };

    render() {
        return (
            <div className='newsBody'>
                <Grid>
                    <Grid.Column width={4}>
                        <Image src={this.props.newsImage} rounded/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Container>
                            <p>
                                {this.props.newsBody}
                            </p>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default NewsBody;