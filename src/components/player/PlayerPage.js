import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import './PlayerPage.css'
import Info from "./Info";
import Stats from "./Stats";
import RelatedNews from "./RelatedNews";

class PlayerPage extends Component{
    render() {
        return(
            <div className='main-player'>
                <div className='playerDetails'>
                    <Info/>
                    <Stats/>
                </div>
                <RelatedNews/>
            </div>
        )
    }
}

export default PlayerPage;