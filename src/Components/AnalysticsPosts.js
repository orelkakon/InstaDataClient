import React, { useState } from 'react';
import { AanalysticsDiv, PostCatagoryBox } from './index'
import goodLogo from './../Assets/good.png'
import badLogo from './../Assets/bad.png'

const AnalysticPosts = () => {
    return (
        <AanalysticsDiv>
            <h2>{sessionStorage.getItem('session')}</h2>
            <PostCatagoryBox positive={true}>
                <h5>My Most Popular posts<br /></h5>
                <img style={{height:'50px', width:'50px', display:'inline-block'}} src={goodLogo} alt="good"/>
            </PostCatagoryBox>
            <PostCatagoryBox positive={false}>
                <h5>My Least Popular posts<br /></h5>
                <img style={{height:'50px', width:'50px', display:'inline-block'}} src={badLogo} alt="good"/>
            </PostCatagoryBox>
            <PostCatagoryBox positive={true}>
                <h5>My Most Liked posts<br /></h5>
                <img style={{height:'50px', width:'50px', display:'inline-block'}} src={goodLogo} alt="good"/>
            </PostCatagoryBox>
            <PostCatagoryBox positive={false}>
                <h5>My Least Liked posts<br /></h5>
                <img style={{height:'50px', width:'50px', display:'inline-block'}} src={badLogo} alt="good"/>
            </PostCatagoryBox>
            <PostCatagoryBox positive={true}>
                <h5>My Most Commented posts<br /></h5>
                <img style={{height:'50px', width:'50px', display:'inline-block'}} src={goodLogo} alt="good"/>
            </PostCatagoryBox>
            <PostCatagoryBox positive={false}>
                <h5>My Least Commented posts<br /></h5>
                <img style={{height:'50px', width:'50px', display:'inline-block'}} src={badLogo} alt="good"/>
            </PostCatagoryBox>
        </AanalysticsDiv>
    );
};

export default AnalysticPosts;