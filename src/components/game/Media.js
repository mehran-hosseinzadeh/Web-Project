import React, {Component} from 'react';
import './Media.css'
import {Divider, Grid, Image} from "semantic-ui-react";
class Media extends Component {
    static defaultProps = {
        videos: [
            {
                videoAddress: 'panda.mp4',
                videoTitle: 'پاندا'
            },
            {
                videoAddress: 'panda.mp4',
                videoTitle: 'پاندا'
            },
        ],
        images: [
            {
                imageAddress: 'camels.jpg',
                imageTitle: 'شتر'
            },
            {
                imageAddress: 'camels.jpg',
                imageTitle: 'شتر'
            },
        ]
    };

    showVideos() {
        return this.props.videos.map((video, index) => {
            return (
                <div className='gameVideo'>
                    <h3>
                        {video.title}
                    </h3>
                    <video width="100%" controls key={index}>
                        <source src={video.media_url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <hr/>
                </div>
            )
        })
    }

    showImages(){
        return this.props.images.map((image, index) => {
            return (
                <div className='gameImage'>
                    <h3>
                        {image.title}
                    </h3>
                    <Image src={image.media_url} rounded key={index}/>
                    <Divider/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='gameMedia'>
                <Grid>
                    <Grid.Column width={8}>
                        {this.showVideos()}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        {this.showImages()}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Media;