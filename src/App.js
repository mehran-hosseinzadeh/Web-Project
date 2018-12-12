import React, {Component} from 'react';
import './App.css';
import PageHeader from "./components/home_page/PageHeader";
import TeamPage from "./components/team/TeamPage";
import GamePage from "./components/game/GamePage";
import NewsBox from "./components/home_page/NewsBox";
import MatchBox from "./components/home_page/MatchBox";
import {Header, Icon} from "semantic-ui-react";
import LeagueTab from "./components/league/LeagueTab";
import NewsHeading from "./components/news/NewsHeading";
import NewsBody from "./components/news/NewsBody";
import NewsCommentSection from "./components/news/NewsCommentSection";
import PlayerPage from "./components/player/PlayerPage";

class App extends Component {
    static defaultProps = {
        newsTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
        newsDate: '1397/9/16',
        newsSource: 'فارس',
        newsTags: ['استقلال', 'فوتبال', 'لیگ'],
        newsBody: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    };

    render() {
        return (
            <div>
                <PageHeader className='row'/>
                <PlayerPage/>
            </div>
        )
    }

    /*
    render() {
        return (
            <div style={{backgroundColor: "snow"}}>
                <PageHeader className="row"/>
                <TeamPage/>

                <Timeline
                style={{direction: "rtl", position:"absolute"}}
                direction="left"
                icon="user"
                title="Title"
                time="Time"
                description="Description."
                color="red"
                tags={['tag1', 'tag2']}
                lineHeight={4}/>

                main page
                <div className='main'>
                <NewsBox/>
                <MatchBox/>
                </div>

                leagues page
                <div style={{marginTop: "20px"}}>
                <Header as='h2' icon textAlign='center'>
                <Icon name='baseball ball' circular />
                <Header.Content>Current League</Header.Content>
                </Header>
                </div>
                <LeagueTab className="ten wide column"/>
                <div style={{marginTop: "20px"}}>
                <Header as='h2' icon textAlign='center'>
                <Icon name='baseball ball' circular />
                <Header.Content>Past League</Header.Content>
                </Header>
                </div>
                <LeagueTab className="ten wide column"/>
            <div>
                <PageHeader/>
                <div className='main'>
                    <NewsBox/>
                    <MatchBox/>
                </div>
            </div>
            <div className='main-news' style={{backgroundColor: "ghostWhite"}}>
                <NewsHeading newsTitle={this.props.newsTitle} newsDate = {this.props.newsDate} newsSource={this.props.newsSource}/>
                <NewsBody newsBody = {this.props.newsBody}/>
                <NewsCommentSection/>
            </div>
            <PlayerPage/>
            <GamePage/>
            </div>
        );
    }
    */
}

export default App;
