import React, {Component} from 'react';
import {Divider, Grid} from "semantic-ui-react";
import './GamePage.css'
import Stats from "./Stats";
import Formations from "./Formations";
import Report from "./Report";
import Highlights from "./Highlights";
import RelatedNews from "./RelatedNews";
import Media from "./Media";
import myConstants from "../../myConstants";

class GamePage extends Component {
    static defaultProps = {
        game_id: 1,
        match: "",
    };
    state = {
        game_data: {},
        game_stats:[],
        main_formations:[],
        game_teams: [],
        game_highlights: [],
        game_exchanges: [],
        game_videos: [],
        game_images: []
    };

    async componentDidMount() {
        let ip = myConstants.get_ip();
        try {
            const res = await fetch('http://' + ip + ':8000/toopchi/games/' + this.props.match.params.id);
            const game_data = await res.json();
            const game_stats = JSON.parse(game_data.game_stats);
            const game_highlights = JSON.parse(game_data.highlights);
            const main_formations = JSON.parse(game_data.main_formations);
            console.log(main_formations);
            const game_teams = [game_data.first_team, game_data.second_team];
            const game_exchanges = JSON.parse(game_data.exchanges);
            const game_media = JSON.parse(game_data.media);
            let game_videos=[];
            let game_images=[];
            for(let i = 0; i < game_media.length; i++){
                if(game_media[i].type === 'فیلم'){
                    game_videos.push(game_media[i]);
                    continue;
                }
                game_images.push(game_media[i])
            }
            this.setState({
                game_data,
                game_stats,
                main_formations,
                game_teams,
                game_highlights,
                game_exchanges,
                game_images,
                game_videos
            });
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div className='main-game'>
                <Report/>
                <Divider/>
                <br/>
                <Grid>
                    <Grid.Column width={3}>
                        <Formations teams={this.state.game_teams} teamIndex={0}/>
                        <div className='relatedNews'>
                            <h1>
                                اخبار مرتبط
                            </h1>
                            <RelatedNews/>
                            <h1>
                                گالری
                            </h1>
                        </div>
                        <Media videos={this.state.game_videos} images={this.state.game_images}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Formations teams={this.state.game_teams} teamIndex={1}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div className='stats'>
                            <Stats exchanges={this.state.game_exchanges} stats={this.state.game_stats} playerOfMatch={this.state.game_data.best_player}/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Highlights highlights={this.state.game_highlights} teams={this.state.game_teams}/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default GamePage;