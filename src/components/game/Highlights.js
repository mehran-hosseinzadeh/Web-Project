import React, {Component} from 'react';
import './Highlights.css'

class Highlights extends Component{

    static defaultProps = {
        highlights: {
            goals: [
                {
                    byTeam: 'استقلال',
                    byPlayer: 'اکبر اصغری',
                    passer: 'سعید سعیدی',
                    minute: 58,
                },
                {
                    byTeam: 'پیکان',
                    byPlayer: 'رحیم رحمتی',
                    passer: 'کاظم کاظمی',
                    minute: 78,
                },
            ],
            cards: [
                {
                    toTeam: 'استقلال',
                    toPlayer: 'اکبر اصغری',
                    color: 'زرد',
                    minute: 27,
                },
                {
                    toTeam: 'پیکان',
                    toPlayer: 'امین امینی',
                    color: 'زرد',
                    minute: 75,
                },
            ],
            exchanges: [
                {
                    forTeam: 'پیکان',
                    playerOut: 'حمید احمدی',
                    playerIn: 'امین امینی',
                    minute: 60,
                }
            ]
        }
    };
    render() {
        return(
            <div>

            </div>
        )
    }
}
export default Highlights;