import React, {Component} from 'react';
import './PlayerPage.css'
import Info from "./Info";
import Stats from "./Stats";
import RelatedNews from "./RelatedNews";
import {Divider, Segment, Tab} from "semantic-ui-react";
import myConstants from "../../myConstants";

class PlayerPage extends Component{

    static defaultProps = {
        player_id: 1,
        match: "",
    };
    state = {
        player_related_news:[]
    };

    async componentDidMount(){
        let ip = myConstants.get_ip();
        let player_related_news = [];
        let res = await fetch('http://' + ip + ':8000/toopchi/player/related_news/title/' + this.props.match.params.id);
        let related_news = await res.json();
        player_related_news[0] = {'type': 'عنوان خبر', 'all_news': JSON.parse(related_news)};
        res = await fetch('http://' + ip + ':8000/toopchi/player/related_news/body/' + this.props.match.params.id);
        related_news = await res.json();
        player_related_news[1] = {'type': 'متن خبر', 'all_news': JSON.parse(related_news)};
        res = await fetch('http://' + ip + ':8000/toopchi/player/related_news/tags/' + this.props.match.params.id);
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
                        <RelatedNews allNews={related_news.all_news}/>
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