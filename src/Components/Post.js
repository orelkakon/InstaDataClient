import React from 'react';
import { PostBlock } from './index'

const Post = (props) => {
    return (
        <PostBlock positive={props.positive}>
            {
                props.postKind === 'Both' ? <p>Likes - {props.likes} | Comments - {props.comments}</p> :
                (props.postKind === 'like' ? <p>Likes - {props.likes}</p> : <p>Comments - {props.comments}</p>)

            }
            <a href={props.url} target="_blank" rel="noreferrer" style={{color:'white'}}>See Photo</a>
            <br/>
        </PostBlock>
    );
};

export default Post;