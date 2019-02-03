import React, {Component} from 'react';
import {Grid, Item, Label} from 'semantic-ui-react';
import './Info.css'
import myConstants from "../../myConstants";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Info extends Component {
    state = {
        player: {},
        team_name: ''
    };
    static defaultProps = {
        playerName: "اصغر اکبری",
        playerAge: 30,
        playerNationality: "ایرانی",
        playerTeam: "پرسپولیس",
        playerPost: "مهاجم",
        playerWeight: 75,
        playerHeight: 190,
        playerImage: "camels.jpg",
        playerSport: "فوتبال"
    };

    async componentDidMount() {
        let ip = myConstants.get_ip();
        try {
            const res = await fetch('http://' + ip + ':8000/toopchi/player');
            const players = await res.json();
            const player = players[0];
            const res2 = await fetch('http://' + ip + ':8000/toopchi/teams/' + player.team);
            const team = await res2.json();
            const team_name = team.team_name;

            this.setState({
                player,
                team_name
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <span className='playerInfo'>
                <Item>
                    <Grid>
                        <Grid.Column width={4}>
                            <Item.Image src={this.state.player.avatar}/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Item.Content>
                                <Item.Header as='h1'>{this.state.player.name}</Item.Header>
                                <Item.Meta>
                                    <span className='playerPost'>{this.state.player.post} </span>
                                    <Link to={"/team/" + this.state.player.team}>
                                        <span className='playerTeam'>{this.state.team_name}</span>
                                    </Link>
                                    <ul className='personalInfo'>
                                        <li className='playerNationality'>ملیت: {this.state.player.nationality}</li>
                                        <li className='playerAge'>سن: {this.state.player.age}</li>
                                        <li className='playerWeight'>وزن: {this.state.player.weight}</li>
                                        <li className='playerHeight'>قد: {this.state.player.height}</li>
                                    </ul>
                                </Item.Meta>
                                {/*<Item.Description>{this.props.playerName}</Item.Description>*/}
                                <Item.Extra>
                                    <Label>{this.state.player.sport}</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Grid.Column>
                    </Grid>
                </Item>
            </span>
        )
    }
}

export default Info

