import React, {Component} from 'react';
import './Highlights.css'
import Timeline from 'react-timeline-semantic-ui'
import {Grid} from "semantic-ui-react";

class Highlights extends Component {

    static defaultProps = {
        highlights: [
            {
                description: 'گل',
                team: 0,
                byPlayer: 'اکبر اصغری',
                passer: 'سعید سعیدی',
                minute: 18,
            },
            {
                description: 'گل',
                team: 1,
                byPlayer: 'رحیم رحمتی',
                passer: 'کاظم کاظمی',
                minute: 46,
            },
            {
                description: 'کارت',
                team: 0,
                toPlayer: 'اکبر اصغری',
                minute: 57,
                color: 'قرمز',
            },
            {
                description: 'تعویض',
                team: 1,
                playerOut: 'حمید احمدی',
                playerIn: 'امین امینی',
                minute: 60,
            },
            {
                description: 'کارت',
                team: 1,
                toPlayer: 'امین امینی',
                minute: 75,
                color: 'زرد',
            },
            {
                description: 'پنالتی',
                team: 2,
                minute: 85,
                byPlayer: 'سعید سعیدی',
                status: 'ناموفق',
            }
        ],
        exchanges: [
            {
                forTeam: 'پیکان',
                playerOut: 'حمید احمدی',
                playerIn: 'امین امینی',
                minute: 60,
            }
        ],
        teams: ['استقلال', 'پیکان'],
    };

    showTimeline() {
        return this.props.highlights.map((highlight, index) => {
            const direction = (highlight.team  === this.props.teams[0]) ? 'right' : 'left';
            const description = highlight.extra_data;
            // const description = (highlight.description === 'گل')
            //     ? 'پاس گل توسط ' + highlight.passer :
            //     (highlight.description === 'تعویض') ? highlight.playerOut :
            //         (highlight.description === 'پنالتی') ? highlight.status :
            //             '';
            const tag = (highlight.description === 'کارت')
                ? 'کارت ' + highlight.extra_data :
                highlight.description;
            const color = (highlight.description === 'گل')
                ? 'green' :
                (highlight.description === 'کارت')
                    ? ((highlight.extra_data === 'زرد') ? 'yellow' : 'red') :
                    (highlight.description === 'پنالتی') ? 'blue'
                        : (highlight.description === 'تعویض') ? 'orange'
                        : '';
            const title = highlight.player;
            // const title = (highlight.description === 'گل')
            //     ? highlight.byPlayer :
            //     (highlight.description === 'کارت')
            //         ? highlight.toPlayer :
            //         (highlight.description === 'تعویض')
            //             ? highlight.playerIn :
            //             (highlight.description === 'پنالتی')
            //                 ? highlight.byPlayer :
            //                 '';
            return (
                <Timeline
                    key={index}
                    direction={direction}
                    icon=""
                    title={title}
                    time={"دقیقه " + highlight.minute}
                    description={description}
                    color={color}
                    tags={[tag]}
                    lineHeight={4}
                />
            )
        })
    }

    render() {
        return (
            <div className='timeline'>
                    <Grid>
                        <Grid.Column width={8}>
                            <h1 className='timelineTitle'>
                                {this.props.teams[0]}
                            </h1>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h1 className='timelineTitle'>
                                {this.props.teams[1]}
                            </h1>
                        </Grid.Column>
                    </Grid>
                {this.showTimeline()}
            </div>
        )
    }
}

export default Highlights;