import React, {Component} from 'react';
import {Comment} from 'semantic-ui-react';
import './NewsComment.css';


class NewsComment extends Component {
    render() {
        return (
            <Comment>
                <Comment.Avatar src={this.props.avatar}/>
                <Comment.Content>
                    <Comment.Author as='a'>{this.props.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>{this.props.date}</div>
                        </Comment.Metadata>
                    <Comment.Text>{this.props.text}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>پاسخ دادن</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        )
    }

}

export default NewsComment;