import React, {Component} from 'react';
import {Grid, Item, Label} from 'semantic-ui-react';
import './Info.css'

class Info extends Component {
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

    render() {
        return (
            <span className='playerInfo'>
                <Item>
                    <Grid>
                        <Grid.Column width={4}>
                            <Item.Image src={this.props.playerImage}/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Item.Content>
                                <Item.Header as='h1'>{this.props.playerName}</Item.Header>
                                <Item.Meta>
                                    <span className='playerPost'>{this.props.playerPost} </span>
                                    <span className='playerTeam'>{this.props.playerTeam}</span>
                                    <ul className='personalInfo'>
                                        <li className='playerNationality'>ملیت: {this.props.playerNationality}</li>
                                        <li className='playerAge'>سن: {this.props.playerAge}</li>
                                        <li className='playerWeight'>وزن: {this.props.playerWeight}</li>
                                        <li className='playerHeight'>قد: {this.props.playerHeight}</li>
                                    </ul>
                                </Item.Meta>
                                {/*<Item.Description>{this.props.playerName}</Item.Description>*/}
                                <Item.Extra>
                                    <Label>{this.props.playerSport}</Label>
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

