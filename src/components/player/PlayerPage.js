import React, {Component} from 'react';
import './PlayerPage.css'
import Info from "./Info";
import Stats from "./Stats";
import RelatedNews from "./RelatedNews";
import {Divider, Segment, Tab} from "semantic-ui-react";

class PlayerPage extends Component{

    static defaultProps = {
        player_id: 1
    };
    state = {
        player_related_news:[]
    };

    async componentDidMount(){
        let player_related_news = [];
        let res = await fetch('http://127.0.0.1:8000/toopchi/players/related_news/title/' + this.props.player_id);
        let related_news = await res.json();
        player_related_news[0] = {'type': 'عنوان خبر', 'all_news': JSON.parse(related_news)};
        res = await fetch('http://127.0.0.1:8000/toopchi/players/related_news/body/' + this.props.player_id);
        related_news = await res.json();
        player_related_news[1] = {'type': 'متن خبر', 'all_news': JSON.parse(related_news)};
        res = await fetch('http://127.0.0.1:8000/toopchi/players/related_news/tags/' + this.props.player_id);
        related_news = await res.json();
        player_related_news[2] = {'type': 'برچسب های اخبار', 'all_news': JSON.parse(related_news)};
        console.log(player_related_news);
        this.setState({
            player_related_news
        })
    }

    makeTabs() {
        return this.state.player_related_news.map((related_news, index) => {
            return {
                menuItem: related_news.type,
                render: () =>
                    <Tab.Pane attached={false}>
                        <Segment>
                            <RelatedNews allNews={related_news.all_news}/>
                        </Segment>
                        <Divider/>
                    </Tab.Pane>
            }
        })
    }
    render() {
        return(
            <Segment className='main-player'>
                <div className='playerDetails'>
                    <Info/>
                    <Stats/>
                </div>
                <span className='playerRelatedNews'>
                    <Tab menu={{vertical: true}} menuPosition='right' panes={this.makeTabs()}/>
                </span>
            </Segment>
        )
    }
}

export default PlayerPage;