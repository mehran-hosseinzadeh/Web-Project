import React, {Component} from 'react';
import './Report.css'
import {Segment} from "semantic-ui-react";

class Report extends Component{
    render() {
        return(
            <Segment className='gameReport'>
                <h1>
                    گزارش لحظه ای بازی:
                </h1>
            </Segment>
        )
    }
}
export default Report;