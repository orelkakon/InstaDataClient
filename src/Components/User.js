import React from 'react';
import { UserDiv, AUserRef } from './index'

const User = (props) => {
    return (
        <UserDiv>
            <AUserRef href={`https://www.instagram.com/${props.name}/`} target="_blank" rel="noreferrer">{props.name}  -  {props.value}</AUserRef>
        </UserDiv>
    );
};

export default User;