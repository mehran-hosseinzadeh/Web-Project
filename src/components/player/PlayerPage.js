import React, {Component} from 'react';
import './PlayerPage.css'
import Info from "./Info";
import Stats from "./Stats";
import RelatedNews from "./RelatedNews";
import {Segment} from "semantic-ui-react";

class PlayerPage extends Component{
    render() {
        return(
            <Segment className='main-player'>
                <div className='playerDetails'>
                    <Info/>
                    <Stats/>
                </div>
                <RelatedNews/>
            </Segment>
        )
    }
}

export default PlayerPage;